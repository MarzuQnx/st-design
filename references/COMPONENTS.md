# Component Reference

> Repeated DOM patterns detected by structural analysis. Each component appeared 3+ times.

## Detected Components

| Component | Category | Instances | Key Classes |
|-----------|----------|-----------|-------------|
| **Item** | card | 34× | `.item` |
| **Cloned** | card | 30× | `.cloned`, `.owl-item` |
| **Dropdown** | list-item | 10× | `.dropdown` |
| **Auto Container** | unknown | 6× | `.auto-container` |
| **Auto Container** | unknown | 5× | `.auto-container` |
| **More Btn** | button | 5× | `.more-btn` |
| **Row** | unknown | 4× | `.row` |
| **Owl Stage Outer** | badge | 4× | `.owl-stage-outer` |
| **Owl Stage** | badge | 4× | `.owl-stage` |
| **Info Box** | unknown | 3× | `.info-box`, `.upper-column` |
| **Icon Box** | unknown | 3× | `.icon-box` |
| **Text** | unknown | 3× | `.text` |
| **Col Md 4** | unknown | 3× | `.col-md-4`, `.col-sm-6`, `.col-xs-12` |
| **Single Service Style One** | unknown | 3× | `.single-service-style-one`, `.text-center` |
| **Icon Box** | unknown | 3× | `.icon-box` |
| **Hover Icon** | unknown | 3× | `.hover-icon` |
| **Normal Icon** | unknown | 3× | `.normal-icon` |
| **Image Box** | unknown | 3× | `.image-box` |
| **Box** | unknown | 3× | `.box` |
| **More Link** | unknown | 3× | `.more-link` |

## Cards

### Item

**Instances found:** 34

**CSS classes:** `.item`

**HTML structure:**

```html
<div class="item"> <div class="single-project-box-two"> <div class="image-box clearfix"> <img src="images/resource/project-2-2.jpg" alt="Awesome Image"> </div><!-- /.image-box --> <div class="content-box"> <h3>Moscow - Vladivostok</h3> <span>Railway Infrastucture</span> <p>How all this mistakens denouncings pleas…</p> <a href="#" class="more"><i class="machinery-icon-next"></i> Read More</a> </div><!-- /.content-box --> </div><!-- /.single-project-box-two --> </div>
```

**Base styles (from design tokens):**

```css
.item {
  background: #262626;
  border: 1px solid #444444;
  border-radius: 4px;
  padding: 10px;
}```

### Cloned

**Instances found:** 30

**CSS classes:** `.cloned` `.owl-item`

**HTML structure:**

```html
<div class="owl-item cloned" style="width: 1090px;"><div class="item"> <div class="single-project-box-two"> <div class="image-box clearfix"> <img src="images/resource/project-2-2.jpg" alt="Awesome Image"> </div><!-- /.image-box --> <div class="content-box"> <h3>Moscow - Vladivostok</h3> <span>Railway Infrastucture</span> <p>How all this mistakens denouncings pleas…</p> <a href="#" class="more"><i class="machinery-icon-next"></i> Read More</a> </div><!-- /.content-box --> </div><!-- /.single-project-box-two --> </div></div>
```

**Base styles (from design tokens):**

```css
.cloned {
  background: #262626;
  border: 1px solid #444444;
  border-radius: 4px;
  padding: 10px;
}```

## List Items

### Dropdown

**Instances found:** 10

**CSS classes:** `.dropdown`

**HTML structure:**

```html
<li class="dropdown"><a href="#">About Us</a> <ul> <li><a href="about.html">About Company</a></li> <li><a href="testimonial.html">Testimonials</a></li> <li><a href="faqs.html">FAQ’s</a></li> <li><a href="pricing.html">Pricing Table</a></li> </ul> <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div></li>
```

**Base styles (from design tokens):**

```css
.dropdown {
  padding: 5px 0;
  border-bottom: 1px solid #444444;
}```

## Buttons

### More Btn

**Instances found:** 5

**CSS classes:** `.more-btn`

**HTML structure:**

```html
<a href="#" class="more-btn"><i class="machinery-icon-next"></i>More About Us</a>
```

**Base styles (from design tokens):**

```css
.more-btn {
  color: #ffffff;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}```

## Badges & Chips

### Owl Stage Outer

**Instances found:** 4

**CSS classes:** `.owl-stage-outer`

**HTML structure:**

```html
<div class="owl-stage-outer"><div class="owl-stage" style="transition: all; width: 7980px; padding-left: 175px; padding-right: 175px; transform: translate3d(-2180px, 0px, 0px);"><div class="owl-item cloned" style="width: 1090px;"><div class="item"> <div class="single-project-box-two"> <div class="image-box clearfix"> <img src="images/resource/project-2-2.jpg" alt="Awesome Image"> </div><!-- /.image-box --> <div class="content-box"> <h3>Moscow - Vladivostok</h3> <span>Railway Infrastucture</span> <p>How all this mistakens denouncings pleas…</p> <a href="#" class="more"><i class="machinery-icon-
```

**Base styles (from design tokens):**

```css
.owl-stage-outer {
  background: #262626;
  border: 1px solid #444444;
  border-radius: 4px;
  padding: 3px 5px;
  font-size: 12px;
}```

### Owl Stage

**Instances found:** 4

**CSS classes:** `.owl-stage`

**HTML structure:**

```html
<div class="owl-stage" style="transition: all; width: 7980px; padding-left: 175px; padding-right: 175px; transform: translate3d(-2180px, 0px, 0px);"><div class="owl-item cloned" style="width: 1090px;"><div class="item"> <div class="single-project-box-two"> <div class="image-box clearfix"> <img src="images/resource/project-2-2.jpg" alt="Awesome Image"> </div><!-- /.image-box --> <div class="content-box"> <h3>Moscow - Vladivostok</h3> <span>Railway Infrastucture</span> <p>How all this mistakens denouncings pleas…</p> <a href="#" class="more"><i class="machinery-icon-next"></i> Read More</a> </di
```

**Base styles (from design tokens):**

```css
.owl-stage {
  background: #262626;
  border: 1px solid #444444;
  border-radius: 4px;
  padding: 3px 5px;
  font-size: 12px;
}```

## Other Components

### Auto Container

**Instances found:** 6

**CSS classes:** `.auto-container`

**HTML structure:**

```html
<div class="auto-container"> <div class="clearfix"> <div class="pull-left logo-outer"> <div class="logo"><a href="index.html"><img src="images/logo.png" alt="" title=""></a></div> </div> <div class="pull-right upper-right clearfix"> <!--Info Box--> <div class="upper-column info-box"> <div class="icon-box"><span class="machinery-icon-clock"></span></div> <ul> <li><strong>Mon - Sat:</strong> 9am to 7pm</li> </ul> </div> <!--Info Box--> <!--Info Box--> </div> </div> </div>
```

**Base styles (from design tokens):**

```css
.auto-container {
  background: #262626;
  padding: 5px;
}```

### Auto Container

**Instances found:** 5

**CSS classes:** `.auto-container`

**HTML structure:**

```html
<div class="auto-container"> <div class="sec-title text-center"> <h4>Our Services</h4> <h2>Our Market Sectors</h2> <div class="text">You will find yourself working in a true partnership that results in an incredible <br> experience, and an end product that is the best.</div><!-- /.text --> </div><!-- /.sec-title --> <div class="row"> <div class="col-md-4 col-sm-6 col-xs-12"> <div class="single-service-style-one text-center"> <div class="icon-box"> <img src="images/icons/services-icon/color-1-3.png" alt="Awesome Image" class="hover-icon"> <img src="images/icons/services-icon/gray-1-3.png" alt="
```

**Base styles (from design tokens):**

```css
.auto-container {
  background: #262626;
  padding: 5px;
}```

### Row

**Instances found:** 4

**CSS classes:** `.row`

**HTML structure:**

```html
<div class="row"> <div class="col-md-6"> <div class="image-box"> <img src="images/resource/about-1-1.jpg" alt="Awesome Image"> </div><!-- /.image-box --> </div><!-- /.col-md-6 --> <div class="col-md-6"> <div class="sec-title"> <h4>Company</h4> <h2>About Our Company</h2> </div><!-- /.sec-title --> <div class="content-box"> <h3>Our Mission</h3> <p>Must explain to you how all this mistake…</p> <h3>Our Vision</h3> <ul class="list-items"> …</ul> </div><!-- /.content-box --> </div><!-- /.col-md-6 --> </div>
```

**Base styles (from design tokens):**

```css
.row {
  background: #262626;
  padding: 5px;
}```

### Info Box

**Instances found:** 3

**CSS classes:** `.info-box` `.upper-column`

**HTML structure:**

```html
<div class="upper-column info-box"> <div class="icon-box"><span class="machinery-icon-clock"></span></div> <ul> <li><strong>Mon - Sat:</strong> 9am to 7pm</li> <li>Sunday: Closed</li> </ul> </div>
```

**Base styles (from design tokens):**

```css
.info-box {
  background: #262626;
  padding: 5px;
}```

### Icon Box

**Instances found:** 3

**CSS classes:** `.icon-box`

**HTML structure:**

```html
<div class="icon-box"><span class="machinery-icon-clock"></span></div>
```

**Base styles (from design tokens):**

```css
.icon-box {
  background: #262626;
  padding: 5px;
}```

### Text

**Instances found:** 3

**CSS classes:** `.text`

**HTML structure:**

```html
<div class="text">You will find yourself working in a true partnership that results in an incredible <br> experience, and an end product that is the best.</div>
```

**Base styles (from design tokens):**

```css
.text {
  background: #262626;
  padding: 5px;
}```

### Col Md 4

**Instances found:** 3

**CSS classes:** `.col-md-4` `.col-sm-6` `.col-xs-12`

**HTML structure:**

```html
<div class="col-md-4 col-sm-6 col-xs-12"> <div class="single-service-style-one text-center"> <div class="icon-box"> <img src="images/icons/services-icon/color-1-3.png" alt="Awesome Image" class="hover-icon"> <img src="images/icons/services-icon/gray-1-3.png" alt="Awesome Image" class="normal-icon"> </div><!-- /.icon-box --> <h3><a href="#">Construction products</a></h3> <div class="image-box"> <img src="images/resource/service-2-1.jpg" alt="Awesome Image"> <div class="box"> <a href="#" class="more-link"><i class="machinery-icon-next"></i>Read More</a> </div><!-- /.box --> </div><!-- /.image-bo
```

**Base styles (from design tokens):**

```css
.col-md-4 {
  background: #262626;
  padding: 5px;
}```

### Single Service Style One

**Instances found:** 3

**CSS classes:** `.single-service-style-one` `.text-center`

**HTML structure:**

```html
<div class="single-service-style-one text-center"> <div class="icon-box"> <img src="images/icons/services-icon/color-1-3.png" alt="Awesome Image" class="hover-icon"> <img src="images/icons/services-icon/gray-1-3.png" alt="Awesome Image" class="normal-icon"> </div><!-- /.icon-box --> <h3><a href="#">Construction products</a></h3> <div class="image-box"> <img src="images/resource/service-2-1.jpg" alt="Awesome Image"> <div class="box"> <a href="#" class="more-link"><i class="machinery-icon-next"></i>Read More</a> </div><!-- /.box --> </div><!-- /.image-box --> <p>Encounter consequence that are pa
```

**Base styles (from design tokens):**

```css
.single-service-style-one {
  background: #262626;
  padding: 5px;
}```

### Icon Box

**Instances found:** 3

**CSS classes:** `.icon-box`

**HTML structure:**

```html
<div class="icon-box"> <img src="images/icons/services-icon/color-1-3.png" alt="Awesome Image" class="hover-icon"> <img src="images/icons/services-icon/gray-1-3.png" alt="Awesome Image" class="normal-icon"> </div>
```

**Base styles (from design tokens):**

```css
.icon-box {
  background: #262626;
  padding: 5px;
}```

### Hover Icon

**Instances found:** 3

**CSS classes:** `.hover-icon`

**HTML structure:**

```html
<img src="images/icons/services-icon/color-1-3.png" alt="Awesome Image" class="hover-icon">
```

**Base styles (from design tokens):**

```css
.hover-icon {
  background: #262626;
  padding: 5px;
}```

### Normal Icon

**Instances found:** 3

**CSS classes:** `.normal-icon`

**HTML structure:**

```html
<img src="images/icons/services-icon/gray-1-3.png" alt="Awesome Image" class="normal-icon">
```

**Base styles (from design tokens):**

```css
.normal-icon {
  background: #262626;
  padding: 5px;
}```

### Image Box

**Instances found:** 3

**CSS classes:** `.image-box`

**HTML structure:**

```html
<div class="image-box"> <img src="images/resource/service-2-1.jpg" alt="Awesome Image"> <div class="box"> <a href="#" class="more-link"><i class="machinery-icon-next"></i>Read More</a> </div><!-- /.box --> </div>
```

**Base styles (from design tokens):**

```css
.image-box {
  background: #262626;
  padding: 5px;
}```

### Box

**Instances found:** 3

**CSS classes:** `.box`

**HTML structure:**

```html
<div class="box"> <a href="#" class="more-link"><i class="machinery-icon-next"></i>Read More</a> </div>
```

**Base styles (from design tokens):**

```css
.box {
  background: #262626;
  padding: 5px;
}```

### More Link

**Instances found:** 3

**CSS classes:** `.more-link`

**HTML structure:**

```html
<a href="#" class="more-link"><i class="machinery-icon-next"></i>Read More</a>
```

**Base styles (from design tokens):**

```css
.more-link {
  background: #262626;
  padding: 5px;
}```

## Component Rules

- Match class names exactly from the patterns above
- Each component instance must be visually identical to others of its type
- Do not add extra wrappers or change the DOM structure
- Use `#444444` for all dividers within components

