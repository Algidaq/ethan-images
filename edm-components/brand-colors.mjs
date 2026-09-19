export const COLOR_ROLES = [
  "surface",
  "surfaceMuted",
  "textStrong",
  "text",
  "textMuted",
  "brand",
  "brandDark",
  "brandLight",
  "border",
  "onBrand",
];

export const NEUTRAL_PALETTE = Object.freeze({
  surface: "#FFFFFF",
  surfaceMuted: "#F6F8FA",
  textStrong: "#172033",
  text: "#465266",
  textMuted: "#7B8494",
  brand: "#4B5563",
  brandDark: "#1F2937",
  brandLight: "#D9DEE6",
  border: "#DDE3EA",
  onBrand: "#FFFFFF",
});

export const DEFAULT_FONT_FAMILY = "Plus Jakarta Sans, Arial, sans-serif";

const CSS_VAR_RE = /var\(--(?:edm|replace)-(?:color|font)-([a-zA-Z0-9-]+)/g;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const normalizeHex = (hex) => {
  if (typeof hex !== "string") {
    throw new TypeError("Expected a hex color string.");
  }

  const trimmed = hex.trim();
  const match = trimmed.match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i);

  if (!match) {
    throw new Error(`Invalid hex color: ${hex}`);
  }

  const raw = match[1];
  const expanded =
    raw.length === 3
      ? raw
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : raw;

  return `#${expanded.toUpperCase()}`;
};

const hexToRgb = (hex) => {
  const normalized = normalizeHex(hex).slice(1);
  const value = Number.parseInt(normalized, 16);

  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
};

const rgbToHex = ({ r, g, b }) =>
  `#${[r, g, b]
    .map((channel) => clamp(Math.round(channel), 0, 255).toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()}`;

const mix = (fromHex, toHex, amount) => {
  const from = hexToRgb(fromHex);
  const to = hexToRgb(toHex);
  const ratio = clamp(amount, 0, 1);

  return rgbToHex({
    r: from.r + (to.r - from.r) * ratio,
    g: from.g + (to.g - from.g) * ratio,
    b: from.b + (to.b - from.b) * ratio,
  });
};

const relativeLuminance = (hex) => {
  const { r, g, b } = hexToRgb(hex);
  const values = [r, g, b].map((channel) => {
    const value = channel / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });

  return values[0] * 0.2126 + values[1] * 0.7152 + values[2] * 0.0722;
};

export const contrastRatio = (firstHex, secondHex) => {
  const first = relativeLuminance(firstHex);
  const second = relativeLuminance(secondHex);
  const lighter = Math.max(first, second);
  const darker = Math.min(first, second);

  return (lighter + 0.05) / (darker + 0.05);
};

const readableOnWhite = (hex, minimumRatio = 4.5) => {
  let candidate = normalizeHex(hex);

  for (let step = 0; step < 20 && contrastRatio(candidate, "#FFFFFF") < minimumRatio; step += 1) {
    candidate = mix(candidate, "#000000", 0.12);
  }

  return candidate;
};

const readableWithWhite = (hex, minimumRatio = 4.5) => {
  let candidate = normalizeHex(hex);

  for (let step = 0; step < 20 && contrastRatio(candidate, "#FFFFFF") < minimumRatio; step += 1) {
    candidate = mix(candidate, "#000000", 0.14);
  }

  return candidate;
};

const bestTextFor = (backgroundHex) =>
  contrastRatio(backgroundHex, "#FFFFFF") >= contrastRatio(backgroundHex, "#111827")
    ? "#FFFFFF"
    : "#111827";

const toCssCustomPropertyName = (role) =>
  role.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

export const buildBrandPalette = (primaryHex = NEUTRAL_PALETTE.brandDark) => {
  const primary = normalizeHex(primaryHex);
  const brand = readableOnWhite(primary, 4.5);
  const brandDark = readableWithWhite(mix(brand, "#000000", 0.28), 4.5);

  return {
    surface: "#FFFFFF",
    surfaceMuted: mix(brand, "#FFFFFF", 0.94),
    textStrong: readableOnWhite(mix(brandDark, "#111827", 0.28), 7),
    text: readableOnWhite(mix(brandDark, "#64748B", 0.62), 4.5),
    textMuted: readableOnWhite(mix(brandDark, "#94A3B8", 0.76), 3),
    brand,
    brandDark,
    brandLight: mix(brand, "#FFFFFF", 0.72),
    border: mix(brand, "#FFFFFF", 0.86),
    onBrand: bestTextFor(brandDark),
  };
};

export const colorVar = (role, fallback = NEUTRAL_PALETTE[role]) => {
  if (!COLOR_ROLES.includes(role)) {
    throw new Error(`Unknown color role: ${role}`);
  }

  const name = toCssCustomPropertyName(role);
  return `var(--edm-color-${name}, var(--replace-color-${name}, ${fallback}))`;
};

export const fontVar = (fallback = DEFAULT_FONT_FAMILY) =>
  `var(--edm-font-family, var(--replace-font-family, ${fallback}))`;

export const buildThemeCssVariables = ({ primary, fontFamily } = {}) => {
  const lines = [];

  if (primary) {
    const palette = buildBrandPalette(primary);

    for (const role of COLOR_ROLES) {
      lines.push(`  --edm-color-${toCssCustomPropertyName(role)}: ${palette[role]};`);
    }
  }

  if (fontFamily) {
    lines.push(`  --edm-font-family: ${fontFamily};`);
  }

  return lines.length ? `:root {\n${lines.join("\n")}\n}` : "";
};

export const findCssVariableRoles = (html) => {
  const roles = new Set();

  for (const match of html.matchAll(CSS_VAR_RE)) {
    roles.add(match[1]);
  }

  return [...roles].sort();
};

export const assertKnownCssVariables = (components) => {
  const known = new Set([
    ...COLOR_ROLES.map(toCssCustomPropertyName),
    "family",
  ]);
  const unknown = new Set();

  for (const component of components) {
    for (const role of findCssVariableRoles(component.html ?? "")) {
      if (!known.has(role)) unknown.add(role);
    }
  }

  if (unknown.size > 0) {
    throw new Error(`Unknown CSS variable roles: ${[...unknown].join(", ")}`);
  }
};
