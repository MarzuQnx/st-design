# Interaction Reference

> Micro-interactions extracted from live DOM. Recreate these exactly for authentic feel.

## Coverage

| Component Type | Count | States Captured |
|----------------|-------|----------------|
| Button | 3 | default, hover, focus |
| Role Button | 2 | default, hover, focus |
| Link | 3 | default, hover, focus |
| Input | 3 | default, hover, focus |

## Transition System

These transition declarations were extracted from interactive elements:

```css
transition: all;
transition: 0.3s;
transition: 0.5s;
```

Apply these to all interactive elements. Never invent new durations or easings.

## Button Interactions

### Button 1 — `Newyork`

**States:**

- Default: `../screens/states/button-1-default.png`
- Hover: `../screens/states/button-1-hover.png`
- Focus: `../screens/states/button-1-focus.png`

**Transition:** `all`

_No visible style changes detected for this element._

### Button 2 — `Subscribe Us`

**States:**

- Default: `../screens/states/button-2-default.png`
- Hover: `../screens/states/button-2-hover.png`
- Focus: `../screens/states/button-2-focus.png`

**On hover:**

```css
/* background-color: rgb(247, 192, 45) → */ background-color: rgb(48, 48, 48);
/* color: rgb(48, 48, 48) → */ color: rgb(247, 192, 45);
/* border-color: rgb(48, 48, 48) → */ border-color: rgb(247, 192, 45);
/* outline: rgb(48, 48, 48) none 3px → */ outline: rgb(247, 192, 45) none 3px;
/* outline-color: rgb(48, 48, 48) → */ outline-color: rgb(247, 192, 45);
```

**Transition:** `0.3s`

### Button 3 — `Submit Now`

**States:**

- Default: `../screens/states/button-3-default.png`
- Hover: `../screens/states/button-3-hover.png`
- Focus: `../screens/states/button-3-focus.png`

**On hover:**

```css
/* background-color: rgb(247, 247, 247) → */ background-color: rgb(48, 48, 48);
/* color: rgb(48, 48, 48) → */ color: rgb(247, 192, 45);
/* border-color: rgb(48, 48, 48) → */ border-color: rgb(247, 192, 45);
/* outline: rgb(48, 48, 48) none 3px → */ outline: rgb(247, 192, 45) none 3px;
/* outline-color: rgb(48, 48, 48) → */ outline-color: rgb(247, 192, 45);
```

**Transition:** `0.3s`

## Role Button Interactions

### Role Button 1 — `Previous`

**States:**

- Default: `../screens/states/role-button-1-default.png`
- Hover: `../screens/states/role-button-1-hover.png`
- Focus: `../screens/states/role-button-1-focus.png`

**On hover:**

```css
/* background-color: rgba(0, 0, 0, 0) → */ background-color: rgba(247, 192, 45, 0.906);
/* color: rgb(247, 192, 45) → */ color: rgb(254, 249, 235);
/* border-color: rgba(255, 255, 255, 0.3) → */ border-color: rgba(247, 194, 51, 0.933);
/* outline: rgb(247, 192, 45) none 3px → */ outline: rgb(254, 249, 235) none 1px;
/* outline-color: rgb(247, 192, 45) → */ outline-color: rgb(254, 249, 235);
```

**On focus:**

```css
/* outline: rgb(247, 192, 45) none 3px → */ outline: rgb(247, 192, 45) none 1px;
```

**Transition:** `0.5s`

### Role Button 2 — `Next`

**States:**

- Default: `../screens/states/role-button-2-default.png`
- Hover: `../screens/states/role-button-2-hover.png`
- Focus: `../screens/states/role-button-2-focus.png`

**On hover:**

```css
/* background-color: rgba(0, 0, 0, 0) → */ background-color: rgba(247, 192, 45, 0.906);
/* color: rgb(247, 192, 45) → */ color: rgb(254, 249, 235);
/* border-color: rgba(255, 255, 255, 0.3) → */ border-color: rgba(247, 194, 51, 0.933);
/* outline: rgb(247, 192, 45) none 3px → */ outline: rgb(254, 249, 235) none 1px;
/* outline-color: rgb(247, 192, 45) → */ outline-color: rgb(254, 249, 235);
```

**On focus:**

```css
/* outline: rgb(247, 192, 45) none 3px → */ outline: rgb(247, 192, 45) none 1px;
```

**Transition:** `0.5s`

## Link Interactions

### Link 1 — `a`

**States:**

- Default: `../screens/states/link-1-default.png`
- Hover: `../screens/states/link-1-hover.png`
- Focus: `../screens/states/link-1-focus.png`

**On hover:**

```css
/* color: rgb(247, 192, 45) → */ color: rgb(35, 82, 124);
/* border-color: rgb(247, 192, 45) → */ border-color: rgb(35, 82, 124);
/* outline: rgb(247, 192, 45) none 3px → */ outline: rgb(35, 82, 124) none 3px;
/* outline-color: rgb(247, 192, 45) → */ outline-color: rgb(35, 82, 124);
```

**On focus:**

```css
/* color: rgb(247, 192, 45) → */ color: rgb(35, 82, 124);
/* border-color: rgb(247, 192, 45) → */ border-color: rgb(35, 82, 124);
/* outline: rgb(247, 192, 45) none 3px → */ outline: rgb(35, 82, 124) none 3px;
/* outline-color: rgb(247, 192, 45) → */ outline-color: rgb(35, 82, 124);
```

**Transition:** `all`

### Link 2 — `0`

**States:**

- Default: `../screens/states/link-2-default.png`
- Hover: `../screens/states/link-2-hover.png`
- Focus: `../screens/states/link-2-focus.png`

**On hover:**

```css
/* color: rgb(247, 192, 45) → */ color: rgb(35, 82, 124);
/* border-color: rgb(247, 192, 45) → */ border-color: rgb(35, 82, 124);
/* outline: rgb(247, 192, 45) none 3px → */ outline: rgb(35, 82, 124) none 3px;
/* outline-color: rgb(247, 192, 45) → */ outline-color: rgb(35, 82, 124);
```

**On focus:**

```css
/* color: rgb(247, 192, 45) → */ color: rgb(35, 82, 124);
/* border-color: rgb(247, 192, 45) → */ border-color: rgb(35, 82, 124);
/* outline: rgb(247, 192, 45) none 3px → */ outline: rgb(35, 82, 124) none 3px;
/* outline-color: rgb(247, 192, 45) → */ outline-color: rgb(35, 82, 124);
```

**Transition:** `all`

### Link 3 — `a`

**States:**

- Default: `../screens/states/link-3-default.png`
- Hover: `../screens/states/link-3-hover.png`
- Focus: `../screens/states/link-3-focus.png`

**Transition:** `all`

_No visible style changes detected for this element._

## Input Interactions

### Input 1 — `Name`

**States:**

- Default: `../screens/states/input-1-default.png`
- Hover: `../screens/states/input-1-hover.png`
- Focus: `../screens/states/input-1-focus.png`

**Transition:** `all`

_No visible style changes detected for this element._

### Input 2 — `Email Address`

**States:**

- Default: `../screens/states/input-2-default.png`
- Hover: `../screens/states/input-2-hover.png`
- Focus: `../screens/states/input-2-focus.png`

**Transition:** `all`

_No visible style changes detected for this element._

### Input 3 — `Your Name`

**States:**

- Default: `../screens/states/input-3-default.png`
- Hover: `../screens/states/input-3-hover.png`
- Focus: `../screens/states/input-3-focus.png`

**On focus:**

```css
/* border-color: rgb(239, 239, 239) → */ border-color: rgb(247, 192, 45);
```

**Transition:** `0.3s`

## Interaction Rules

- Hover effects include **color transitions** — use the extracted values, not approximations
- Focus states use **outline** (not box-shadow) — always match the extracted focus ring
- Transition durations in use: `0.3s`, `0.5s`
- Always respect `prefers-reduced-motion` — set all transitions to `0s` when enabled

