# Pre-Written Issues

Copy-paste these into GitHub Issues after pushing the repo. Each is ready to go with title, description, and label suggestions.

---

## Issue 1

**Title:** `Change the hero section accent color from blue to a different brand color`

**Labels:** `good first issue`, `style`

**Body:**
```
## What needs to change

The hero badge and primary button currently use `#2563eb` (a standard blue). We'd like to experiment with a more distinctive color that still has good contrast and feels "cloud native."

## Where to look

In `src/styles.css`, find the `:root` block. The variable you want is `--color-primary`. Change it to a color that:

- Has a contrast ratio of at least 4.5:1 against white (you can check at https://webaim.org/resources/contrastchecker/)
- Looks good in both light and dark mode
- Feels fitting for a DevOps/tech project

## What a good solution looks like

- The variable is updated in `:root` and `[data-theme="dark"]` appropriately
- The change is visible in the hero badge, filter buttons, and the "Read the Contributing Guide" button
- The page still looks clean and readable
- You've tested both light and dark modes in a browser

## Hint

`#0891b2` (cyan-600) and `#7c3aed` (violet-600) are popular in CNCF-adjacent projects. But feel free to propose something else  -  just explain your reasoning in the PR!
```

---

## Issue 2

**Title:** `Fix heading hierarchy  -  hero title should be h1, not duplicated across sections`

**Labels:** `good first issue`, `accessibility`

**Body:**
```
## What needs to change

For screen readers and SEO, a page should have exactly one `<h1>` tag, and headings should follow a logical hierarchy (h1 → h2 → h3, not skipping levels).

Currently in `src/index.html`, the glossary cards use `<h2>` for each term title. This is correct  -  but it means any section-level headings above them should also be checked.

## Where to look

Open `src/index.html` and audit the heading levels throughout the page:
- The main page title in the hero (`The DevOps Glossary`)
- The "About This Project" heading
- The "How Contributing Works" heading
- The card terms

## What a good solution looks like

- There is exactly one `<h1>` on the page
- Section headings are `<h2>` where appropriate
- Card titles are `<h2>` or `<h3>` consistently
- The visual appearance doesn't change (CSS is already decoupled from heading level)
- You've run the page through a browser's accessibility inspector to verify

## How to check

In Chrome DevTools: Accessibility tab → Full page scan, or use the free Axe DevTools browser extension.
```

---

## Issue 3

**Title:** `Add a new glossary term card: "ConfigMap"`

**Labels:** `good first issue`, `content`

**Body:**
```
## What needs to change

Add a new term card to the glossary for **ConfigMap**  -  a core Kubernetes concept that beginners encounter quickly but rarely have explained to them clearly.

## Where to add it

In `src/index.html`, inside the `<div class="glossary-grid" id="glossary-grid">`, add a new `<article class="term-card">` element. It should go in the Kubernetes category (alongside Pod, Namespace, Helm, Ingress).

## The definition to use (or improve!)

> A Kubernetes object that stores non-sensitive configuration data as key-value pairs. Instead of hardcoding environment variables or config files inside a container image, you put them in a ConfigMap and inject them at runtime. This means you can change configuration without rebuilding or redeploying your container image.

Feel free to improve this definition if you can make it clearer or more beginner-friendly.

## What a good solution looks like

The card should follow the exact same HTML structure as the other Kubernetes cards:

```html
<article class="term-card" data-category="kubernetes" tabindex="0">
  <div class="card-header">
    <span class="card-tag kubernetes">Kubernetes</span>
  </div>
  <h2 class="card-term">ConfigMap</h2>
  <p class="card-definition">
    ...your definition here...
  </p>
  <div class="card-footer">
    <span class="card-keyword">Configuration</span>
    <span class="card-keyword">Key-Value</span>
  </div>
</article>
```

The card should appear in the grid and be filterable with the "Kubernetes" category button.
```

---

## Issue 4

**Title:** `Improve footer spacing and layout on mobile screens`

**Labels:** `good first issue`, `style`, `mobile`

**Body:**
```
## What's wrong

On mobile screens (viewport width below 480px), the footer content wraps in a way that looks crowded. The left side (logo + tagline) and right side (nav links) stack, but the spacing and alignment aren't consistent.

## How to reproduce

1. Open `src/index.html` in Chrome
2. Open DevTools → Toggle Device Toolbar (Ctrl+Shift+M / Cmd+Shift+M)
3. Select "iPhone SE" or any narrow viewport
4. Scroll to the footer

You should see that the footer feels cramped.

## What a good solution looks like

- Footer items stack vertically on mobile with consistent padding
- Links are easy to tap (at least 44px tap target height)
- The footer text is readable at small sizes
- The fix lives in `src/styles.css` inside the existing `@media (max-width: 640px)` block

## Notes

Don't change the desktop footer layout  -  just improve the mobile behavior. Test at both 375px (iPhone 14 Pro) and 390px widths.
```

---

## Issue 5

**Title:** `Add a "Copy to clipboard" button to each glossary card`

**Labels:** `good first issue`, `enhancement`, `javascript`

**Body:**
```
## What to add

When a user hovers over a glossary card, show a small "Copy" button in the top-right corner. Clicking it should copy the term name and definition to the clipboard.

## Why this is useful

People reading the glossary often want to paste a definition into their notes, a Slack message, or a study guide. This removes friction.

## What a good solution looks like

- A "Copy" icon button appears on card hover (or as a persistent icon  -  your call)
- Clicking it copies the term + definition as plain text
- After clicking, the button briefly changes to "Copied!" (or a checkmark) to confirm
- It falls back gracefully if the Clipboard API is not available
- The button is accessible (has an `aria-label`)

## Technical hints

- The Clipboard API: `navigator.clipboard.writeText(text).then(...)`
- You can get the term with `card.querySelector('.card-term').textContent`
- You can get the definition with `card.querySelector('.card-definition').textContent`
- Style the button in `src/styles.css`  -  it should be subtle and not distract from the content

## Files to change

- `src/index.html` (possibly  -  or you can create buttons dynamically in JS)
- `src/main.js` (clipboard logic)
- `src/styles.css` (button styles)
```

---

## Issue 6

**Title:** `Add visible keyboard shortcut hint for the search bar`

**Labels:** `good first issue`, `accessibility`, `ux`

**Body:**
```
## What to add

The search bar already supports a keyboard shortcut: press `/` to focus it, and `Esc` to clear it. But there's no visible hint anywhere on the page that tells users this.

## Where to add it

In `src/index.html`, inside the `.search-wrapper` div (or just below the search input), add a small hint:

```html
<span class="search-hint">Press <kbd>/</kbd> to search</span>
```

## What a good solution looks like

- The hint is visible on desktop but hidden on mobile (where the shortcut is less relevant)
- It uses a `<kbd>` element for the key name (semantic HTML for keyboard keys)
- It's styled subtly  -  small, muted color, not competing with the search input
- On mobile (below 640px viewport), it's hidden via CSS
- The `<kbd>` element has appropriate styling in `src/styles.css`

## CSS hint

The `<kbd>` element isn't styled by default in most browsers. Give it a style that makes it look like a keyboard key  -  small, monospaced font, slight border and shadow.
```

---

## Issue 7

**Title:** `Improve card hover animation  -  add a subtle border glow effect`

**Labels:** `good first issue`, `style`

**Body:**
```
## What to change

Currently, glossary cards lift up on hover (`transform: translateY(-3px)`) and get a box shadow. The effect is nice but the transition could feel more polished.

The goal: on hover, the card border should animate to a color that matches the card's category tag (e.g., blue for Kubernetes cards, purple for Core Concepts cards), not just the generic primary blue.

## Where to look

In `src/styles.css`, find `.term-card:hover`  -  currently it just uses `var(--color-primary)`. 

## What a good solution looks like

There are two reasonable approaches:

**Option A (CSS only):** Add a `border-color` transition per category using attribute selectors:
```css
.term-card[data-category="kubernetes"]:hover { border-color: var(--color-kubernetes); }
.term-card[data-category="core"]:hover { border-color: var(--color-core); }
/* etc. */
```

**Option B (CSS custom property):** Set `--card-accent` dynamically and use it for the hover border.

Either approach is valid  -  explain your choice in the PR.

## Important

- Don't break the existing hover lift animation
- Make sure the effect still looks good in dark mode
- Test in Firefox and Chrome (they handle box-shadow transitions slightly differently)
```

---

## Issue 8

**Title:** `Add a "Back to top" button that appears when scrolling down`

**Labels:** `good first issue`, `enhancement`, `javascript`

**Body:**
```
## What to add

When a user has scrolled more than 400px down the page, show a small "↑ Top" button in the bottom-right corner. Clicking it smoothly scrolls back to the top.

## Why this is useful

The glossary page is long. On mobile especially, scrolling back to the search bar to try a different query requires a lot of effort. A back-to-top button solves this.

## What a good solution looks like

- The button is fixed to the bottom-right corner of the viewport
- It only appears after scrolling 400px or more (invisible/transparent above that)
- Clicking it scrolls to the top smoothly (`window.scrollTo({ top: 0, behavior: 'smooth' })`)
- It has an `aria-label="Back to top"` for screen readers
- The transition in/out is smooth (CSS opacity + transform, not sudden appear/disappear)
- It respects `prefers-reduced-motion` (no animation if the user has reduced motion enabled)

## Files to change

- `src/index.html`  -  add the button element near the bottom of `<body>`
- `src/styles.css`  -  positioning, transition, visibility logic
- `src/main.js`  -  scroll event listener to toggle visibility

## Code hint

```javascript
window.addEventListener('scroll', () => {
  const button = document.getElementById('back-to-top');
  if (window.scrollY > 400) {
    button.classList.add('visible');
  } else {
    button.classList.remove('visible');
  }
});
```
```

---

*These issues are ready to copy-paste into GitHub. Create them one at a time in the Issues tab with the suggested labels. Add the `good first issue` label to all of them so they show up in GitHub's "contribute" discovery.*
