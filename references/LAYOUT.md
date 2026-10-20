# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 5px

**Scale:** `5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75` px

| Spacing | Semantic Use |
|---------|-------------|
| 5px | Tight — within a component |
| 10px | Medium — between sibling items |
| 20px | Wide — between sections |
| 40px | Vast — major section breaks |

## Structural Containers

### `<header>` (`header.main-header.style-three`)

```
display:          block
children:         4
```

### `<footer>` (`footer.main-footer.padding-top`)

```
display:          block
children:         2
```

### `<section>` (`section.services-style-one`)

```
display:          block
padding:          100px 0px 0px
children:         1
```

### `<section>` (`section.more-service-link-box.text-center`)

```
display:          block
padding:          150px 0px 100px
children:         1
```

### `<section>` (`section.about-style-one`)

```
display:          block
padding:          100px 0px
children:         1
```

### `<section>` (`section.project-style-two`)

```
display:          block
padding:          100px 0px 0px
children:         2
```

### `<section>` (`section.testimonial-section-home-two`)

```
display:          block
padding:          0px 0px 120px
children:         1
```

### `<section>` (`section.fun-fact-style-one`)

```
display:          block
padding:          99.75px 0px
children:         1
```

### `<section>` (`section.blog-style-two`)

```
display:          block
padding:          100px 0px
children:         1
```

### `<section>` (`section.contact-map-section`)

```
display:          block
children:         1
```

### `<section>` (`section.contact-section.request-qoute-content-block`)

```
display:          block
children:         1
```

### `<section>` (`section.client-carousel-wrapper-two`)

```
display:          block
padding:          100px 0px 150px
children:         1
```

## Layout Rules

- **Container max-width:** `1200px` — always center with `margin: auto`
- Every spacing value must be a multiple of **5px**
- Never use arbitrary margin/padding values outside the spacing scale

