// Generate a classless, table-free representation of every agnostic EDM component.
// The source JSON remains the canonical table-based version; this file is only
// responsible for the review artifact requested by the component library.
import fs from "fs/promises";

const INPUT = "edm-components/components-agnostic-html.json";
const JSON_OUTPUT = "edm-components/component.json";
const HTML_OUTPUT = "edm-components/all-components-div-comparison.html";
const COMPONENT_WIDTH = 600;

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const readAttribute = (attributes, name) => {
  const match = attributes.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, "i"));
  return match?.[1] ?? "";
};

const styleAttribute = (style) => (style ? ` style="${style}"` : "");

const cleanTableAttributes = (attributes) => {
  const style = readAttribute(attributes, "style");
  const widthAttribute = readAttribute(attributes, "width");
  const width = /^\d+(?:\.\d+)?$/.test(widthAttribute) ? `${widthAttribute}px` : widthAttribute;
  const heightAttribute = readAttribute(attributes, "height");
  const height = /^\d+(?:\.\d+)?$/.test(heightAttribute) ? `${heightAttribute}px` : heightAttribute;
  const align = readAttribute(attributes, "align");
  const declarations = [];

  // Tables become vertical layout containers. Keeping width/background/border
  // declarations in the original style preserves the visual component shell.
  if (width) declarations.push(`width:${width};`);
  if (height) declarations.push(`height:${height};`);
  declarations.push("display:flex;flex-direction:column;");
  if (align === "center" && !width) {
    // A centered table without an explicit width is intrinsically sized (the
    // common button/pill pattern). A plain flex column otherwise stretches its
    // row and turns the compact control into a full-width bar.
    declarations.push("width:max-content;max-width:100%;margin-left:auto;margin-right:auto;");
  }
  if (align === "right" && !width) declarations.push("width:max-content;max-width:100%;margin-left:auto;");

  return styleAttribute(`${declarations.join("")}${style}`);
};

const cleanRowAttributes = (attributes) => {
  const style = readAttribute(attributes, "style");
  const valign = style.match(/vertical-align\s*:\s*([^;]+)/i)?.[1] ?? "";
  const alignItems = /bottom/i.test(valign)
    ? "flex-end"
    : /middle/i.test(valign)
      ? "center"
      : "stretch";
  return styleAttribute(`display:flex;flex-wrap:wrap;align-items:${alignItems};width:100%;${style}`);
};

const cleanCellAttributes = (attributes) => {
  const style = readAttribute(attributes, "style");
  const widthAttribute = readAttribute(attributes, "width");
  const heightAttribute = readAttribute(attributes, "height");
  const colspan = Number.parseInt(readAttribute(attributes, "colspan"), 10) || 1;
  const align = readAttribute(attributes, "align");
  const widthStyle = style.match(/\bwidth\s*:\s*([^;]+)/i)?.[1]?.trim() ?? "";
  const width = widthAttribute || widthStyle;
  const valign = readAttribute(attributes, "valign") || (style.match(/vertical-align:([^;]+)/i)?.[1] ?? "");
  const declarations = [];

  if (colspan > 1) {
    // Colspan cells are section headers, separators, and total rows in this
    // catalog. They must occupy the whole flex row rather than sharing it.
    declarations.push("flex:1 1 100%;width:100%;");
  } else if (width) {
    // Percentage cells remain proportional while fixed-width cells remain
    // fixed. Spacer cells (for example width="2%") therefore keep their role.
    const normalizedWidth = /^\d+(?:\.\d+)?$/i.test(width) ? `${width}px` : width;
    const fixed = /^(?:\d+(?:\.\d+)?)(?:px|em|rem)$/i.test(normalizedWidth);
    const spacer = /^\d+(?:\.\d+)?%$/i.test(normalizedWidth) && Number.parseFloat(normalizedWidth) <= 10;
    declarations.push(`flex:${fixed || spacer ? `0 0 ${normalizedWidth}` : "1 1 0"};`);
    if (!fixed && !spacer && !widthStyle) declarations.push(`width:${normalizedWidth};`);
  } else {
    declarations.push("flex:1 1 auto;");
  }
  declarations.push("min-width:0;");
  if (heightAttribute) {
    const height = /^\d+(?:\.\d+)?$/.test(heightAttribute)
      ? `${heightAttribute}px`
      : heightAttribute;
    declarations.push(`height:${height};min-height:${height};`);
  }
  if (/center/i.test(align)) declarations.push("text-align:center;");
  if (/right/i.test(align)) declarations.push("text-align:right;");
  if (/left/i.test(align)) declarations.push("text-align:left;");
  if (/middle/i.test(valign)) declarations.push("align-self:center;");
  if (/top/i.test(valign)) declarations.push("align-self:flex-start;");

  return styleAttribute(`${declarations.join("")}${style}`);
};

/**
 * Replace only layout tags. Content tags, attributes, copy, links, assets,
 * and theme-variable fallback chains are intentionally passed through.
 */
export const toDivHtml = (html) => {
  const converted = html
    .replace(/<table\b([^>]*)>/gi, (_, attributes) => `<div${cleanTableAttributes(attributes)}>`)
    .replace(/<\/table\s*>/gi, "</div>")
    .replace(/<tr\b([^>]*)>/gi, (_, attributes) => `<div${cleanRowAttributes(attributes)}>`)
    .replace(/<\/tr\s*>/gi, "</div>")
    .replace(/<td\b([^>]*)>/gi, (_, attributes) => `<div${cleanCellAttributes(attributes)}>`)
    .replace(/<\/td\s*>/gi, "</div>");

  return `<div style="width:${COMPONENT_WIDTH}px;min-width:${COMPONENT_WIDTH}px;max-width:${COMPONENT_WIDTH}px;">${converted}</div>`;
};

const pageStyles = `
      :root {
        color-scheme: light;
        --edm-color-surface: #ffffff;
        --edm-color-surface-muted: #f6f8fa;
        --edm-color-text-strong: #172033;
        --edm-color-text: #465266;
        --edm-color-text-muted: #7b8494;
        --edm-color-brand: #4b5563;
        --edm-color-brand-dark: #1f2937;
        --edm-color-brand-light: #d9dee6;
        --edm-color-border: #dde3ea;
        --edm-color-on-brand: #ffffff;
        --edm-font-family: Plus Jakarta Sans, Arial, sans-serif;
      }
      *, *::before, *::after { box-sizing: border-box; }
      body { margin: 0; background: #eef1f4; color: #172033; font-family: Inter, Arial, sans-serif; }
      main { width: 1316px; margin: 0 auto; padding: 32px 20px 56px; }
      main > header { margin-bottom: 28px; }
      main > header h1 { margin: 0 0 8px; font-size: clamp(24px, 4vw, 36px); }
      main > header p { max-width: 780px; margin: 0; color: #5f6b7a; line-height: 1.55; }
      section[data-component] { margin: 0 0 28px; padding: 18px; border: 1px solid #d7dde5; border-radius: 12px; background: #fff; box-shadow: 0 2px 7px rgba(15, 23, 42, .05); }
      section[data-component] > header { display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 12px; margin-bottom: 14px; }
      section[data-component] > header strong { padding: 4px 7px; border-radius: 4px; background: #1f2937; color: #fff; font-size: 12px; }
      section[data-component] > header h2 { margin: 0; font-size: 17px; }
      section[data-component] > div { display: grid; grid-template-columns: repeat(2, 600px); gap: 16px; }
      article[data-version] { width: 600px; min-width: 600px; max-width: 600px; }
      article[data-version] > h3 { margin: 0 0 7px; color: #667085; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; }
      article[data-version] > div { width: 600px; min-width: 600px; max-width: 600px; min-height: 100%; overflow: hidden; border: 1px solid #e0e5eb; border-radius: 8px; background: #fff; }
    `;

const buildComparison = (components) => {
  const sections = components
    .map((component) => {
      const converted = toDivHtml(component.html).trim();
      return `
      <section data-component="${escapeHtml(component.code)}">
        <header><strong>${escapeHtml(component.code)}</strong><h2>${escapeHtml(component.title)}</h2></header>
        <div>
          <article data-version="before"><h3>Before · table</h3><div>${component.html}</div></article>
          <article data-version="after"><h3>After · div / flex / grid</h3><div>${converted}</div></article>
        </div>
      </section>`;
    })
    .join("\n");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>EDM Components: Table to Div Comparison</title>
    <style>${pageStyles}</style>
  </head>
  <body>
    <main>
      <header>
        <h1>Table → div / flex / grid comparison</h1>
        <p>All ${components.length} agnostic EDM components are shown before and after conversion at a fixed 600px canvas width. The converted fragments are classless and retain the original copy, assets, dimensions, alignment, and theme-variable fallback chains.</p>
      </header>
${sections}
    </main>
  </body>
</html>
`;
};

const main = async () => {
  const components = JSON.parse(await fs.readFile(INPUT, "utf8"));
  const converted = components.map((component) => ({
    ...component,
    html: toDivHtml(component.html),
  }));

  await fs.writeFile(JSON_OUTPUT, JSON.stringify(converted, null, 2) + "\n");
  await fs.writeFile(HTML_OUTPUT, buildComparison(components));
  console.log(`Wrote ${JSON_OUTPUT} and ${HTML_OUTPUT} (${components.length} components)`);
};

await main();
