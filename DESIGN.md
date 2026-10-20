# st DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 3 · Components: 9
> Icon library: not detected · State: not detected
> Primary theme: dark · Dark mode toggle: no · Motion: expressive

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![st Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **dark-themed** interface with a neutral tone. Depth is expressed through layered shadows and subtle surface color variation. Typography pairs **Arial** for display/headings with **Helvetica Neue** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **5px base grid** (standard density), with scale: 5, 10, 15, 20, 25, 30, 35, 40px. Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| background | `#333333` | background | Page background, darkest surface |
| surface | `#262626` | surface | Card and panel backgrounds |
| text-primary | `#ffffff` | text-primary | Headings and body text |
| text-muted | `#777777` | text-muted | Captions, placeholders, secondary info |
| border | `#444444` | border | Dividers, card borders, outlines |
| danger | `#a94442` | danger | Error states, destructive actions |
| success | `#3c763d` | success | Success states, positive indicators |
| warning | `#f7c02d` | warning | Warning states, caution indicators |
| info | `#2098d1` | info | Informational highlights |
| unknown | `#888888` | unknown | Palette color |
| unknown | `#181818` | unknown | Palette color |
| unknown | `#f3f3f3` | unknown | Palette color |
| unknown | `#000000` | unknown | Palette color |
| unknown | `#e8e8e8` | unknown | Palette color |
| unknown | `#cccccc` | unknown | Palette color |
| unknown | `#337ab7` | unknown | Palette color |
| unknown | `#dddddd` | unknown | Palette color |
| unknown | `#999999` | unknown | Palette color |
| unknown | `#8a6d3b` | unknown | Palette color |
| unknown | `#555555` | unknown | Palette color |


---

## 3. Typography Rules

**Font Stack:**
- **Helvetica Neue** — Heading 1, Heading 2, Heading 3
- **Arial** — Body, Caption
- **Menlo** — Code

**Font Sources:**

```css
@font-face {
  font-family: "Open Sans";
  src: url("https://fonts.gstatic.com/s/opensans/v44/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkWVAexQ.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Open Sans";
  src: url("https://fonts.gstatic.com/s/opensans/v44/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkyFjWVAexQ.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Roboto";
  src: url("https://fonts.gstatic.com/s/roboto/v51/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLoHQuAj-lg.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Roboto";
  src: url("https://fonts.gstatic.com/s/roboto/v51/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLmbXuAj-lg.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Flaticon";
  src: url("https://st.ourhtmldemo.com/new/Machinery/fonts/Flaticon.eot") format("embedded-opentype");
  font-weight: 400;
}
@font-face {
  font-family: "machinery-icon";
  src: url("https://st.ourhtmldemo.com/new/Machinery/plugins/machinery-icons/fonts/machinery-icon.eot?ukbjz9");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Helvetica Neue | 130px | 700 |
| Heading 2 | Helvetica Neue | 120px | 700 |
| Heading 3 | Helvetica Neue | 76px | 700 |
| Body | Arial | 16px | 400 |
| Caption | Arial | 14px | 400 |
| Code | Menlo | 14px | 400 |

**Typographic Rules:**
- Limit to 3 font families max per screen
- Use **Helvetica Neue** for body/UI text, **Arial** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Layout (1)

**Footer** — `html`

### Navigation (1)

**Navigation** — `html`

### Data Display (2)

**Badge** — `html`

**List** — `html`

### Data Input (2)

**Button** — `html`
- Variants: `style-one`, `default`
- Animation: 

**Input** — `html`
- State: :focus, :placeholder

### Overlay (1)

**Modal** — `html`

### Media (2)

**Image** — `html`

**Map/Canvas** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 5px
- **Spacing scale:** 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60
- **Border radius:** 0px 4px 4px 0px, .1em, .12em, .25em, 1px, 1em, 3px, 4px, 5px, 6px, 10px, 15px, 21px, 24px, 100%
- **Max content width:** 991px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 2.5-5px | Tight: related items within a group |
| 10px | Medium: between groups |
| 15-20px | Wide: between sections |
| 30px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Flat — subtle depth hints

- `inset 0-1px 0 rgba(0,0,0,.25)`
- `inset 0 1px 1px rgba(0,0,0,.075)`
- `inset 0 1px 0 rgba(255,255,255,.1)`

### Raised — cards, buttons, interactive elements

- `0 0 8px rgba(0,0,0,0.6)`
- `inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)`
- `inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168`

### Floating — dropdowns, popovers, modals

- `0 6px 12px rgba(0,0,0,.175)`
- `0 3px 9px rgba(0,0,0,.5)`
- `0 5px 15px rgba(0,0,0,.5)`

### Overlay — full-screen overlays, top-level dialogs

- `0px 7px 27px 0px rgba(0,0,0,0.11)`
- `0px 7px 25px 0px rgba(0,0,0,0.07)`

### Z-Index Scale

`0, 1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 14, 15, 25, 99, 100, 990, 991, 999, 1000, 1030, 1040, 1042, 1043, 1044, 1045, 1046, 1050, 1060, 1061, 1070, 9999, 99991, 99992, 99994, 99995, 99997, 99999, 999999, 1e+23`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes progress-bar-stripes`
- `@keyframes fa-spin`
- `@keyframes bounce`
- `@keyframes flash`
- `@keyframes pulse`
- `@keyframes rubberBand`
- `@keyframes shake`
- `@keyframes swing`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#333333` as the primary page background
- Pair **Helvetica Neue** (body) with **Arial** (display) — these are the only allowed fonts
- Follow the **5px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: 0px 4px 4px 0px, .1em, .12em, .25em, 1px
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Helvetica Neue and Arial and Menlo
- Don't use arbitrary spacing values — stick to multiples of 5px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| xs | 320px | css |
| xs | 375px | css |
| xs | 479px | css |
| xs | 480px | css |
| sm | 550px | css |
| sm | 599px | css |
| md | 650px | css |
| md | 667px | css |
| md | 767px | css |
| md | 768px | css |
| lg | 800px | css |
| lg | 900px | css |
| lg | 991px | css |
| lg | 992px | css |
| lg | 1023px | css |
| lg | 1024px | css |
| xl | 1140px | css |
| xl | 1199px | css |
| xl | 1200px | css |
| 2xl | 1366px | css |
| 2xl | 1370px | css |
| 2xl | 1400px | css |
| 2xl | 1570px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #262626
Border: 1px solid #444444
Radius: 4px
Padding: 20px
Font: Helvetica Neue
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg var(--accent), text white
Ghost: bg transparent, border #444444
Padding: 10px 20px
Radius: 4px
Hover: opacity 0.9 or lighter shade
Focus: ring with var(--accent)
```

### Build a Page Layout

```
Background: #333333
Max-width: 991px, centered
Grid: 5px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #262626
Label: #777777 (muted, 12px, uppercase)
Value: #ffffff (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #333333
Input border: 1px solid #444444
Focus: border-color var(--accent)
Label: #777777 12px
Spacing: 20px between fields
Radius: 4px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Helvetica Neue, type scale from Section 3
4. Spacing: 5px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```
