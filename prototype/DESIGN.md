---
name: Fiery Modern
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#5d3f3b'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#916f6a'
  outline-variant: '#e6bdb7'
  surface-tint: '#bf0605'
  primary: '#be0504'
  on-primary: '#ffffff'
  primary-container: '#e32b1e'
  on-primary-container: '#ffffff'
  inverse-primary: '#ffb4a8'
  secondary: '#b02f00'
  on-secondary: '#ffffff'
  secondary-container: '#ff5722'
  on-secondary-container: '#541100'
  tertiary: '#7d5600'
  on-tertiary: '#ffffff'
  tertiary-container: '#9d6d00'
  on-tertiary-container: '#ffffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930001'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#862200'
  tertiary-fixed: '#ffdeac'
  tertiary-fixed-dim: '#ffba38'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#604100'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Bebas Neue
    fontSize: 80px
    fontWeight: '400'
    lineHeight: 80px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Bebas Neue
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 36px
  headline-md:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Bebas Neue
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.05em
  price-display:
    fontFamily: Bebas Neue
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 24px
spacing:
  base: 8px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 80px
---

## Brand & Style
The brand personality is intense, unapologetic, and high-energy, mirroring the sensory experience of Nashville hot chicken. It targets a young, adventurous demographic that values bold flavors and "Instagrammable" food culture.

The design style is a hybrid of **High-Contrast Bold** and **Modern Brutalism**. It utilizes massive, impactful typography and a restricted but vibrant color palette to create a sense of urgency and heat. Visual interest is generated through sharp geometric shapes, large-scale flame graphics used as background textures, and a deliberate play between stark white surfaces and deep, "charred" dark modes. The interface should feel fast-paced, appetizing, and tactile.

## Colors
The palette is built on the "heat scale." The primary **Nashville Red** (#E32B1E) is used for critical calls to action and branding. **Blaze Orange** (#FF5722) serves as a secondary accent for highlighting spice levels and promotional offers. A tertiary **Scorched Yellow** (#FFB300) is used sparingly for badges and "New" indicators.

The neutral system relies on a high-contrast foundation. Backgrounds should alternate between pure white (#FFFFFF) for readability and **Charcoal Black** (#1A1A1A) to evoke the charred, smoky nature of the grill. Semantic colors for success or info should be avoided in favor of the brand colors to maintain the high-energy "fiery" aesthetic.

## Typography
Typography is the primary driver of the brand's voice. **Bebas Neue** is used for all headlines and labels in all-caps format to command attention. Its condensed nature allows for aggressive sizing without consuming excessive vertical space.

**Hanken Grotesk** provides a clean, contemporary contrast for body descriptions, ensuring high readability against busy backgrounds. For price points and spice levels, Bebas Neue should be paired with the primary red to create a clear visual anchor. Always use tight line-heights for headlines to maintain a "stacked" and impactful appearance.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a heavy emphasis on verticality and "shredded" edges. 

- **Desktop:** 12-column grid with 24px gutters. Use wide margins (64px) to allow large flame graphics to bleed off the edges.
- **Mobile:** 4-column grid with 16px gutters and 20px margins.
- **Rhythm:** Use an 8px base unit. Components should feel densely packed to reflect the intensity of the product. Section transitions should often use diagonal or flame-cut dividers rather than straight horizontal lines to maintain the "fiery modern" energy.

## Elevation & Depth
This design system avoids traditional soft shadows. Instead, it uses **Tonal Layers** and **Hard Offsets** to create depth.

1.  **Layering:** Elements are stacked using high-contrast color blocks (e.g., a Red card on a Black background).
2.  **Hard Shadows:** If depth is required for buttons or cards, use a 100% opacity hard-offset shadow (e.g., 4px down, 4px right) in a contrasting color (Black or Red) to mimic a graphic, print-inspired look.
3.  **Graphic Overlays:** Semi-transparent flame textures (multiply or overlay modes) are used to create depth within background containers without using traditional blurs.

## Shapes
The shape language is **Sharp** and geometric. Rectangular containers with 0px border radius evoke a sense of strength and modern brutalism.

To contrast the sharp containers, use organic "Flame" cutouts for hero sections and image masks. Use 45-degree angled corners for specific UI elements like "Heat Level" badges to reinforce the aggressive brand personality. Buttons should remain strictly rectangular.

## Components
- **Buttons:** Primary buttons are solid Nashville Red with white Bebas Neue text, all-caps. Hover states should invert to Black or use a hard-offset "pop" effect.
- **Heat Selector:** A custom component using a horizontal scale of flame icons. As the spice level increases, the flame icons grow in size and shift from Yellow to Red.
- **Cards:** Product cards use a Charcoal Black background with white text and a prominent red price tag in the top right. Images should be high-saturation with "hard" lighting to emphasize food texture.
- **Chips/Badges:** Used for "Dine-in Only" or "Limited Daily" tags. These should use Scorched Yellow with Black text to ensure they pop against Red or White backgrounds.
- **Input Fields:** Thick 2px black borders, no radius, with Bebas Neue labels. Focus state changes the border to Nashville Red.
- **Menu Lists:** Use dotted leader lines (as seen in the reference) to connect menu items to prices, maintaining the classic chicken-shack feel but updated with modern typography.