# EDM Component Branding Variables

The agnostic component library in `components-agnostic-html.json` does not hard-code a final brand palette into each component. Instead, every color and font value points to a CSS variable with a fallback chain.

That means the same component HTML can render as:

1. A fully branded Emirates NBD component when brand variables are available.
2. A manually replaced component when `--replace-*` variables are available.
3. A safe brand-agnostic component when neither of those exists.

## Emirates NBD Theme

Use these variables in the preview page, iframe document, or any HTML wrapper that contains the components:

```css
:root {
  --edm-color-surface: #FFFFFF;
  --edm-color-surface-muted: #F0F2F4;
  --edm-color-text-strong: #081930;
  --edm-color-text: #40526A;
  --edm-color-text-muted: #728298;
  --edm-color-brand: #072447;
  --edm-color-brand-dark: #051A33;
  --edm-color-brand-light: #BAC2CB;
  --edm-color-border: #DCE0E5;
  --edm-color-on-brand: #FFFFFF;
  --edm-font-family: Plus Jakarta Sans, Arial, sans-serif;
}
```

## What Each Variable Does

- `--edm-color-surface`: Main clean background, usually white.
- `--edm-color-surface-muted`: Soft panel or card background.
- `--edm-color-text-strong`: High-emphasis text, headings, important values.
- `--edm-color-text`: Normal body copy.
- `--edm-color-text-muted`: Secondary labels, helper text, captions.
- `--edm-color-brand`: Primary brand accent for links, labels, rules, highlights.
- `--edm-color-brand-dark`: Dark brand fill for CTAs, inverted sections, strong emphasis.
- `--edm-color-brand-light`: Light brand tint for icons, accents, subtle fills, or text on dark areas.
- `--edm-color-border`: Dividers, table rules, outlines, and card borders.
- `--edm-color-on-brand`: Text placed on top of dark/brand backgrounds.
- `--edm-font-family`: The font stack used by component text.

## How Components Use Them

Inside `components-agnostic-html.json`, values are written with nested CSS fallbacks:

```css
color: var(--edm-color-text, var(--replace-color-text, #465266));
font-family: var(--edm-font-family, var(--replace-font-family, Plus Jakarta Sans, Arial, sans-serif));
```

The browser resolves that from left to right:

1. `--edm-*`: the active brand theme, usually set in `:root`.
2. `--replace-*`: an optional manual override layer.
3. final hard-coded fallback: the safe brand-agnostic value.

For iframe previews, put the `:root` block inside the iframe HTML, because CSS variables from the parent page do not automatically cross into the iframe document.

## How The Files Work Together

- `components-with-html.json`: original extracted component source with concrete colors.
- `components-agnostic-html.json`: generated component library with CSS variable fallback chains.
- `brand-colors.mjs`: derives accessible brand variables from a primary brand color.
- `generate-agnostic-components.mjs`: creates the agnostic JSON from the original source.
- `generate-all-components-html.mjs`: creates preview HTML and injects brand variables into `<style> :root`.
- `all-components-emiratesnbd.html`: Emirates NBD preview with all components rendered using the root variables above.

For final email export, consider resolving CSS variables to concrete inline values if the target email client does not reliably support CSS custom properties.
