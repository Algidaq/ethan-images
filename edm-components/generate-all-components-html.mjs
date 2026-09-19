// @ts-check
import fs from "fs/promises";
import path from "path";
import {
  assertKnownCssVariables,
  buildBrandPalette,
  buildThemeCssVariables,
} from "./brand-colors.mjs";

const DEFAULT_INPUT = "edm-components/components-agnostic-html.json";
const DEFAULT_OUTPUT = "edm-components/all-components.html";

const getArgValue = (name) => {
  const prefix = `--${name}=`;
  const inline = process.argv.find((arg) => arg.startsWith(prefix));

  if (inline) return inline.slice(prefix.length);

  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : undefined;
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const buildPreviewHtml = (components, { primary, fontFamily }) => {
  const palette = primary ? buildBrandPalette(primary) : null;
  const themeCssVariables = buildThemeCssVariables({ primary, fontFamily });
  const sectionCounts = components.reduce((counts, component) => {
    counts.set(component.section, (counts.get(component.section) ?? 0) + 1);
    return counts;
  }, new Map());

  const componentsHtml = components
    .map(
      (component) => `<section class="component">
  <header class="component__header">
    <span class="component__code">${escapeHtml(component.code)}</span>
    <h2>${escapeHtml(component.title)}</h2>
    <p>${escapeHtml(component.looks_like)}</p>
  </header>
  <div class="component__frame">
${component.html}
  </div>
</section>`,
    )
    .join("\n");

  const sections = [...sectionCounts.entries()]
    .map(([section, count]) => `<span>Section ${escapeHtml(section)} · ${count}</span>`)
    .join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>EDM Component Gallery</title>
  <style>
    :root {
      color-scheme: light;
      --page-bg: #f3f5f7;
      --ink: #172033;
      --muted: #687386;
      --line: #d9e0e8;
      --panel: #ffffff;
      --brand: ${palette?.brand ?? "#4B5563"};
    }

    ${themeCssVariables}

    * { box-sizing: border-box; }

    body {
      margin: 0;
      background: var(--page-bg);
      color: var(--ink);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    .shell {
      max-width: 920px;
      margin: 0 auto;
      padding: 32px 24px 56px;
    }

    .page-header {
      margin: 0 0 24px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--line);
    }

    .page-header h1 {
      margin: 0;
      font-size: 28px;
      line-height: 1.2;
      letter-spacing: 0;
    }

    .page-header p {
      margin: 8px 0 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.5;
    }

    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 14px;
    }

    .meta span {
      border: 1px solid var(--line);
      background: var(--panel);
      color: var(--muted);
      border-radius: 999px;
      padding: 5px 9px;
      font-size: 12px;
      line-height: 1;
    }

    .component {
      margin: 0 0 24px;
    }

    .component__header {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 5px 10px;
      align-items: baseline;
      margin: 0 0 8px;
    }

    .component__code {
      grid-row: 1 / span 2;
      display: inline-flex;
      align-items: center;
      min-height: 26px;
      padding: 0 8px;
      border-radius: 4px;
      background: var(--brand);
      color: #fff;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0;
    }

    .component__header h2 {
      margin: 0;
      font-size: 16px;
      line-height: 1.3;
      letter-spacing: 0;
    }

    .component__header p {
      margin: 0;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.45;
    }

    .component__frame {
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: #fff;
      box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);
    }

    @media (max-width: 640px) {
      .shell { padding: 24px 14px 40px; }
      .component__header { grid-template-columns: 1fr; }
      .component__code { grid-row: auto; justify-self: start; }
    }
  </style>
</head>
<body>
  <main class="shell">
    <header class="page-header">
      <h1>EDM Component Gallery</h1>
      <p>${components.length} agnostic components rendered ${
        primary ? `with primary ${escapeHtml(primary)}` : "from inline fallback variables"
      }${fontFamily ? ` and ${escapeHtml(fontFamily)}` : ""}.</p>
      <div class="meta">${sections}</div>
    </header>
${componentsHtml}
  </main>
</body>
</html>
`;
};

const main = async () => {
  const inputPath = getArgValue("input") ?? DEFAULT_INPUT;
  const outputPath = getArgValue("out") ?? DEFAULT_OUTPUT;
  const primary = getArgValue("primary");
  const fontFamily = getArgValue("font-family");
  const components = JSON.parse(await fs.readFile(inputPath, "utf8"));

  assertKnownCssVariables(components);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, buildPreviewHtml(components, { primary, fontFamily }));

  console.log(`Wrote ${outputPath}`);
};

await main();
