// @ts-check
import fs from "fs/promises";
import path from "path";
import { colorVar, fontVar } from "./brand-colors.mjs";

const DEFAULT_INPUT = "edm-components/components-with-html.json";
const DEFAULT_OUTPUT = "edm-components/components-agnostic-html.json";
const SOURCE_FONT = "Plus Jakarta Sans,Arial,sans-serif";

const COLOR_REPLACEMENTS = [
  ["#072447", "brandDark"],
  ["#003D7E", "brandDark"],
  ["#1E5BB8", "brand"],
  ["#1E3A6B", "textStrong"],
  ["#4A5A78", "text"],
  ["#8A95A8", "textMuted"],
  ["#92BFFF", "brandLight"],
  ["#ABC4E2", "brandLight"],
  ["#D8E0EC", "border"],
  ["#E2E9F2", "border"],
  ["#E8EFF7", "surfaceMuted"],
  ["#EEF3FA", "surfaceMuted"],
  ["#F5F7FA", "surfaceMuted"],
  ["#F5F8FC", "surfaceMuted"],
  ["#000", "brandDark"],
];

const DESCRIPTION_REPLACEMENTS = [
  [/#072447 bg, white text/g, "dark-brand bg, on-brand text"],
  [/#1E5BB8/g, "brand accent"],
  [/deep-navy/g, "dark-brand"],
  [/deep navy/g, "dark brand"],
  [/navy/g, "dark-brand"],
  [/clay-blue/g, "brand-accent"],
  [/clay-bright/g, "brand-light"],
  [/clay-soft/g, "brand-light"],
  [/clay accent/g, "brand accent"],
  [/white CTA/g, "surface CTA"],
  [/white pill/g, "surface pill"],
];

const getArgValue = (name) => {
  const prefix = `--${name}=`;
  const inline = process.argv.find((arg) => arg.startsWith(prefix));

  if (inline) return inline.slice(prefix.length);

  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : undefined;
};

const replaceCaseInsensitive = (html, color, role) =>
  html.replace(new RegExp(color.replace("#", "\\#"), "gi"), colorVar(role));

const agnosticLooksLike = (looksLike) => {
  let value = looksLike;

  for (const [pattern, replacement] of DESCRIPTION_REPLACEMENTS) {
    value = value.replace(pattern, replacement);
  }

  return value;
};

export const toAgnosticHtml = (html) => {
  let agnostic = html;

  agnostic = agnostic.replace(
    new RegExp(`font-family:${SOURCE_FONT.replaceAll(",", "\\s*,\\s*")}`, "gi"),
    `font-family:${fontVar()}`,
  );
  agnostic = agnostic.replace(/color:#(?:FFFFFF|FFF)\b/gi, `color:${colorVar("onBrand")}`);
  agnostic = agnostic.replace(/background:#(?:FFFFFF|FFF)\b/gi, `background:${colorVar("surface")}`);
  agnostic = agnostic.replace(
    /background-color:#(?:FFFFFF|FFF)\b/gi,
    `background-color:${colorVar("surface")}`,
  );
  agnostic = agnostic.replace(
    /border:([0-9.]+px\s+\w+\s+)#(?:FFFFFF|FFF)\b/gi,
    `border:$1${colorVar("surface")}`,
  );

  for (const [color, role] of COLOR_REPLACEMENTS) {
    agnostic = replaceCaseInsensitive(agnostic, color, role);
  }

  return agnostic;
};

const main = async () => {
  const inputPath = getArgValue("input") ?? DEFAULT_INPUT;
  const outputPath = getArgValue("out") ?? DEFAULT_OUTPUT;
  const components = JSON.parse(await fs.readFile(inputPath, "utf8"));
  const agnosticComponents = components.map((component) => ({
    ...component,
    looks_like: agnosticLooksLike(component.looks_like),
    html: toAgnosticHtml(component.html),
  }));

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(agnosticComponents, null, 2));

  console.log(`Wrote ${outputPath}`);
};

await main();
