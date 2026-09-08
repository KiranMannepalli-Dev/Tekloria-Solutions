# Tekloria® — Global Design System

> **Purpose:** This document is the single source of truth for the visual design, colors, typography, spacing, components, responsiveness, animations, and UI behavior of the entire Tekloria website.
>
> **Important:** Every existing and future page, section, component, and responsive layout MUST follow this document.
>
> **Brand:** Tekloria®
> **Business:** Full-Stack Web Development, Mobile App Development, Custom Software, UI/UX, Business Websites, E-commerce, Web Applications and Digital Solutions.

---

# 1. Brand Direction

Tekloria is a modern technology and development studio.

The visual identity should communicate:

* Modern
* Technical
* Creative
* Premium
* Professional
* Trustworthy
* Human
* Minimal
* Fast
* Product-focused
* Engineering-driven

The website should feel like a **premium modern technology studio**, not a generic software company template.

The design should combine:

**Technology + Creativity + Simplicity + Human Personality**

---

# 2. Core Design Philosophy

Follow these principles across the entire website.

### 2.1 Minimal & Clean

Do not overcrowd pages.

Use:

* Strong typography
* Generous but controlled whitespace
* Clear hierarchy
* Simple cards
* Simple buttons
* Limited colors
* Consistent spacing

Avoid:

* Excessive decoration
* Unnecessary gradients
* Excessive shadows
* Too many borders
* Random colors
* Excessive animations
* Cluttered layouts

---

### 2.2 Brand Consistency

Every page must visually belong to Tekloria.

The following must remain consistent:

* Logo
* Typography
* Accent color
* Buttons
* Border radius
* Navigation
* Section spacing
* Card structure
* Icon style
* Hover behavior
* Responsive behavior

Do NOT create a completely different visual style for individual pages.

---

### 2.3 60 / 20 / 10 / 10 Color Rule

Use approximately:

* **60%** — White / neutral backgrounds
* **20%** — Black / dark surfaces
* **10%** — Tekloria Red
* **10%** — supporting neutral colors

The red accent must remain controlled.

Do not make the entire website red.

---

# 3. Logo

Primary logo:

**Tekloria®**

The logo contains:

* Tekloria wordmark
* Red asterisk/star symbol

### Logo Usage

Use the original logo asset whenever available.

Do not:

* Change logo colors randomly
* Apply gradients
* Add shadows
* Stretch the logo
* Rotate the logo
* Add unnecessary effects
* Place it inside a colored container unless specifically required

### Recommended Logo Variants

#### Dark Background

Use:

* White Tekloria wordmark
* Red asterisk

#### Light Background

Use:

* Black/dark Tekloria wordmark
* Red asterisk

---

# 4. Primary Color System

## 4.1 Primary Black

```text
#0B0B0F
```

Name:

**Primary Black**

Usage:

* Main headings
* Dark sections
* Footer
* Navbar on dark layouts
* Dark buttons
* Primary text when appropriate
* Hero overlays
* High-contrast UI

Do not use pure black everywhere.

---

# 5. White

```text
#FFFFFF
```

Name:

**White**

Usage:

* Main page backgrounds
* Cards
* Primary text on dark backgrounds
* Buttons
* Icons
* Navigation on dark backgrounds
* Hero content

White is the primary clean-space color.

---

# 6. Brand Accent Red

```text
#EF4444
```

Name:

**Tekloria Red**

Usage:

* Primary CTA
* Active navigation
* Important highlights
* Icons
* Links when emphasis is required
* Small decorative elements
* Form focus states
* Success/attention accents where appropriate
* Logo asterisk

This is the **main brand accent**.

### Important

Do not overuse red.

Red should attract attention.

Do NOT use:

* Red backgrounds on every section
* Red cards everywhere
* Red body text
* Red borders on every component

---

# 7. Dark Red

```text
#7F0F16
```

Name:

**Hero Dark Red**

Usage:

* Hero visual environment
* Hero overlay
* Hero-specific backgrounds
* Large visual compositions
* Dark red atmosphere

This color is primarily associated with the Hero.

---

# 8. Charcoal

```text
#1F2937
```

Name:

**Charcoal**

Usage:

* Secondary headings
* Body text on light backgrounds
* Footer text
* Dark UI surfaces
* Secondary navigation
* Supporting UI

---

# 9. Slate

```text
#475569
```

Name:

**Slate**

Usage:

* Secondary text
* Descriptions
* Supporting information
* Metadata
* Form labels
* Service descriptions

Do not use pure black for every piece of text.

---

# 10. Light Gray

```text
#E5E7EB
```

Name:

**Light Gray**

Usage:

* Section separators
* Borders
* Dividers
* Input borders
* Card outlines
* Disabled UI

---

# 11. Soft Line

```text
#F8FAFC
```

Name:

**Soft Line**

Usage:

* Very subtle backgrounds
* Card backgrounds
* Section separation
* Input surfaces
* Secondary UI

---

# 12. Natural / Supporting Color System

Natural colors should be used sparingly.

They exist to make the interface feel more human and balanced.

---

## Beige

```text
#F7F5F5
```

Usage:

* Alternative page background
* About section
* Storytelling sections
* Human-centered sections

---

## Sand

```text
#EDE9E3
```

Usage:

* Secondary sections
* Testimonials
* About/brand storytelling
* Visual separation

---

## Soft Green

```text
#E6F4EA
```

Usage:

* Success states
* Completed states
* Positive indicators
* Trust indicators

Do not use this as a primary brand color.

---

## Soft Red

```text
#FDECEC
```

Usage:

* Error messages
* Warning backgrounds
* Form validation
* Soft red badges

Use this instead of large bright-red error surfaces.

---

## Sky Gray

```text
#EFF5F9
```

Usage:

* Information blocks
* Technical information
* FAQ highlights
* Supporting content

This is a neutral supporting color, NOT a blue brand color.

---

# 13. Complete Color Token System

Use CSS variables.

```css
:root {
  --color-primary-black: #0B0B0F;
  --color-white: #FFFFFF;

  --color-red: #EF4444;
  --color-dark-red: #7F0F16;

  --color-charcoal: #1F2937;
  --color-slate: #475569;

  --color-light-gray: #E5E7EB;
  --color-soft-line: #F8FAFC;

  --color-beige: #F7F5F5;
  --color-sand: #EDE9E3;

  --color-soft-green: #E6F4EA;
  --color-soft-red: #FDECEC;
  --color-sky-gray: #EFF5F9;
}
```

---

# 14. Color Opacity System

Do not create random colors to achieve transparency.

Use opacity.

### White

```text
white
white/90
white/80
white/60
white/40
white/20
white/10
```

### Black

```text
black
black/90
black/80
black/60
black/40
black/20
black/10
```

### Red

```text
#EF4444
red/90
red/80
red/60
red/20
red/10
```

Use opacity primarily for:

* Hover states
* Overlays
* Secondary text
* Dividers
* Background layers
* Hero readability

---

# 15. Background Rules

## MOST IMPORTANT RULE

### Hero background ≠ Website background

The Hero's video/image/background MUST be contained inside the Hero section only.

Correct:

```text
Navbar
Hero
    └── Background Video
    └── Hero Overlay
    └── Hero Content

Services
    └── White / neutral background

Portfolio
    └── Soft neutral background

About
    └── White / Beige

Process
    └── White

Testimonials
    └── Sand / White

CTA
    └── Dark / Red accent

Footer
    └── Primary Black
```

Incorrect:

```text
Entire website
    └── Hero video background
        └── Services
        └── Portfolio
        └── About
        └── Contact
        └── Footer
```

---

# 16. Hero Background Implementation

The Hero background video/image must be scoped to the Hero container.

Recommended structure:

```text
Hero
├── HeroBackground
│   ├── Video/Image
│   └── Overlay
│
└── HeroContent
```

The background must use:

```css
.hero {
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 2;
}
```

The background must NOT be attached to:

```text
body
html
main
global page wrapper
```

---

# 17. Hero Overlay

The Hero can use a dark/red overlay to improve text readability.

Recommended:

```css
background: rgba(11, 11, 15, 0.55);
```

or:

```css
background: rgba(127, 15, 22, 0.30);
```

Do not introduce a new arbitrary gradient.

The visual red tones should primarily come from the Hero media itself.

---

# 18. Typography

Primary font:

# Inter

Use Inter for the majority of the website.

Secondary display font:

# Poppins

Poppins can be used selectively for:

* Hero headlines
* Large display text
* Brand-oriented headings

Do not mix fonts unnecessarily.

---

# 19. Font Hierarchy

## H1

```text
Font: Poppins
Weight: 700
Size: 48–56px
Line Height: 1.05–1.15
Letter Spacing: -0.02em
```

Desktop:

```text
48px–64px
```

Tablet:

```text
40px–48px
```

Mobile:

```text
34px–40px
```

---

# 20. H2

```text
Font: Poppins
Weight: 600
Size: 36–44px
Line Height: 1.15–1.25
Letter Spacing: -0.015em
```

Mobile:

```text
28–34px
```

---

# 21. H3

```text
Font: Inter
Weight: 600
Size: 24px
Line Height: 1.3
```

Mobile:

```text
21–24px
```

---

# 22. H4

```text
Font: Inter
Weight: 600
Size: 18–20px
Line Height: 1.4
```

---

# 23. Body Text

```text
Font: Inter
Weight: 400
Size: 16px
Line Height: 1.6
Color: #475569
```

---

# 24. Small Text

```text
Font: Inter
Weight: 400–500
Size: 14px
Line Height: 1.4
```

---

# 25. Labels

```text
Font: Inter
Weight: 500
Size: 13–14px
Letter Spacing: 0.02em
```

---

# 26. Buttons

```text
Font: Inter
Weight: 500–600
Size: 14–16px
```

---

# 27. Typography Color Rules

### On Light Background

Primary:

```text
#0B0B0F
```

Secondary:

```text
#475569
```

Accent:

```text
#EF4444
```

### On Dark Background

Primary:

```text
#FFFFFF
```

Secondary:

```text
rgba(255,255,255,0.70)
```

Accent:

```text
#EF4444
```

---

# 28. Spacing System

Use an 8px spacing system.

```text
4px
8px
12px
16px
24px
32px
40px
48px
64px
80px
96px
120px
```

Do not randomly use:

```text
17px
23px
37px
53px
```

unless technically necessary.

---

# 29. Section Spacing

Desktop:

```text
80px–120px
```

Tablet:

```text
64px–80px
```

Mobile:

```text
48px–64px
```

Large Hero:

```text
100px–140px minimum vertical visual space
```

---

# 30. Container System

Maximum content width:

```text
1200px
```

Recommended:

```css
max-width: 1200px;
margin: 0 auto;
padding-inline: 24px;
```

Large desktop:

```text
max-width: 1280px
```

Mobile:

```text
padding-inline: 20px;
```

Small mobile:

```text
padding-inline: 16px;
```

---

# 31. Grid System

Use a responsive 12-column desktop grid.

Desktop:

```text
12 columns
```

Tablet:

```text
6 columns
```

Mobile:

```text
1–2 columns depending on component
```

Example:

### Services

Desktop:

```text
3 columns
```

Tablet:

```text
2 columns
```

Mobile:

```text
1 column
```

---

# 32. Border Radius

Primary radius:

```text
6px
```

Use consistently.

Buttons:

```text
9999px
```

for pill-style CTA buttons.

Cards:

```text
6px
```

Inputs:

```text
6px
```

Images:

```text
6px
```

Do not randomly mix:

```text
4px
8px
12px
16px
24px
```

---

# 33. Shadows

The website should use **minimal or no shadows**.

Preferred:

```text
No shadow
```

For elevated UI where necessary:

```css
box-shadow: 0 4px 16px rgba(11, 11, 15, 0.06);
```

Never use:

* Heavy shadows
* Large glowing shadows
* Colored shadows
* Neon effects

---

# 34. Borders

Primary:

```text
#E5E7EB
```

Dark:

```text
rgba(255,255,255,0.20)
```

Subtle:

```text
rgba(11,11,15,0.10)
```

Borders should remain subtle.

---

# 35. Navbar

Navbar must remain minimal.

### Desktop

Structure:

```text
Logo                         Navigation                  CTA
```

Example:

```text
Tekloria®          Services   Portfolio   About       Get in touch
```

### Navbar Rules

* No excessive height
* No unnecessary icons
* No candidate/login icons
* No unrelated UI
* No heavy shadows
* No gradients
* Clear active state
* Consistent alignment

---

# 36. Navbar Colors

### Dark / Hero Navbar

```text
Logo: white + red
Links: white
Hover: white opacity 60%
CTA: white
```

### Light Navbar

```text
Logo: black + red
Links: #0B0B0F
Hover: #EF4444
CTA: #EF4444
```

---

# 37. Navbar CTA

Use:

```text
Get in touch
```

Style:

```text
transparent
white/dark border
```

Hover:

```text
white background
black text
```

on dark layouts.

---

# 38. Buttons

There are three primary button types.

---

## Primary Button

Default:

```text
Background: #EF4444
Text: #FFFFFF
Border: #EF4444
```

Hover:

```text
Background: #D93636
Text: #FFFFFF
```

Use for:

* Start a Project
* Get Started
* Contact Us
* Submit

---

## Secondary Dark Button

Default:

```text
Background: #0B0B0F
Text: #FFFFFF
```

Hover:

```text
Background: #EF4444
Text: #FFFFFF
```

---

## Outline Button

Default:

```text
Background: transparent
Text: inherit
Border: current contextual border
```

Hover:

On dark background:

```text
Background: #FFFFFF
Text: #0B0B0F
```

On light background:

```text
Background: #0B0B0F
Text: #FFFFFF
```

---

# 39. Button Dimensions

Desktop:

```text
Height: 40–44px
Padding: 0 20px
Radius: 9999px
```

Large CTA:

```text
Height: 46–50px
Padding: 0 24px
```

Mobile:

```text
Height: 44–48px
```

Touch target should never be too small.

---

# 40. Icons

Use one consistent icon library.

Recommended:

```text
Lucide Icons
```

Icon style:

* Outline
* Clean
* Minimal
* Consistent stroke width

Recommended:

```text
1.5–2px stroke
```

Do not mix:

* Filled icons
* 3D icons
* Cartoon icons
* Random SVG styles

---

# 41. Service Cards

Service cards should remain simple.

Structure:

```text
Icon
Service title
Short description
Learn more →
```

Example:

```text
Web Development

High-performance websites and custom web
applications built for modern businesses.

Explore service →
```

---

# 42. Service Card Colors

Default:

```text
Background: #FFFFFF
Border: #E5E7EB
Text: #0B0B0F
Description: #475569
Icon: #EF4444
```

Hover:

```text
Border: #EF4444
```

Do not turn the entire card red.

---

# 43. Portfolio Cards

Portfolio should focus on the project visual.

Structure:

```text
Project Image
Category
Project Name
Description
View Project →
```

Use:

```text
border-radius: 6px;
```

Images should maintain consistent aspect ratios.

Recommended:

```text
16:10
16:9
```

---

# 44. Portfolio Hover

Use subtle movement.

Example:

```text
Image scale: 1.02–1.04
```

Transition:

```text
200–300ms
```

Do not use excessive zoom.

---

# 45. About Section

The About section should feel more human.

Recommended background:

```text
#FFFFFF
```

or:

```text
#F7F5F5
```

Use:

* Large typography
* Company story
* Short paragraphs
* Visual content
* Red accent details

Avoid making it look like a corporate annual report.

---

# 46. Process Section

Show the development journey.

Example:

```text
01 Discover
02 Plan
03 Design
04 Develop
05 Test
06 Launch
```

Use clean numbered indicators.

Numbers:

```text
#EF4444
```

Titles:

```text
#0B0B0F
```

Description:

```text
#475569
```

---

# 47. Technology Stack

Technology logos should use their original brand assets where legally appropriate.

Do not recolor official logos unnecessarily.

The surrounding UI should follow Tekloria colors.

Example:

```text
React
Next.js
Node.js
Python
Laravel
Flutter
React Native
Supabase
PostgreSQL
MongoDB
```

Technology section should NOT introduce random website colors into the overall UI.

---

# 48. Testimonials

Recommended background:

```text
#EDE9E3
```

or:

```text
#F7F5F5
```

Card:

```text
#FFFFFF
```

Text:

```text
#0B0B0F
```

Quote:

```text
#475569
```

Accent:

```text
#EF4444
```

---

# 49. FAQ

FAQ background:

```text
#FFFFFF
```

Questions:

```text
#0B0B0F
```

Answer:

```text
#475569
```

Divider:

```text
#E5E7EB
```

Active indicator:

```text
#EF4444
```

Avoid heavy accordion cards.

Prefer clean horizontal separators.

---

# 50. Contact Section

Contact section can use a dark visual treatment.

Background:

```text
#0B0B0F
```

Heading:

```text
#FFFFFF
```

Description:

```text
rgba(255,255,255,0.70)
```

CTA:

```text
#EF4444
```

---

# 51. Forms

Input background:

```text
#FFFFFF
```

Border:

```text
#E5E7EB
```

Text:

```text
#0B0B0F
```

Placeholder:

```text
#475569
```

Focus:

```text
#EF4444
```

Focus ring:

```css
box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.15);
```

Error:

```text
Background: #FDECEC
Text: #7F0F16
Border: #EF4444
```

---

# 52. CTA Sections

CTA sections should create visual contrast.

Preferred options:

### Option A — Dark

```text
Background: #0B0B0F
Heading: #FFFFFF
Text: white/70
Button: #EF4444
```

### Option B — Red

Use sparingly:

```text
Background: #EF4444
Heading: #FFFFFF
Button: #FFFFFF
Button text: #0B0B0F
```

Do not use red CTA sections repeatedly throughout the website.

---

# 53. Footer

Footer:

```text
Background: #0B0B0F
```

Logo:

```text
White + Red
```

Links:

```text
rgba(255,255,255,0.70)
```

Hover:

```text
#FFFFFF
```

Accent:

```text
#EF4444
```

Divider:

```text
rgba(255,255,255,0.15)
```

Footer should be clean and structured.

---

# 54. Footer Structure

Recommended:

```text
Logo + short description

Services
    Web Development
    App Development
    UI/UX
    E-commerce

Company
    About
    Portfolio
    Contact

Resources
    Blog
    FAQs

Contact
    Email
    Phone
    Location

--------------------------------

© Tekloria®
```

---

# 55. Section Background Rotation

Do not make every section white.

Recommended visual rhythm:

```text
Hero
Dark / Hero Video

Services
White

Portfolio
#F8FAFC

About
#FFFFFF / #F7F5F5

Process
White

Technology
#F8FAFC

Testimonials
#EDE9E3

FAQ
White

CTA
#0B0B0F

Footer
#0B0B0F
```

This creates visual separation without introducing unnecessary colors.

---

# 56. Background Restrictions

Never use:

```text
Purple
Blue
Neon green
Orange
Yellow
Pink
Random gradients
```

unless they originate from an actual project image, portfolio image, technology logo, or Hero media.

The UI itself must remain within the Tekloria system.

---

# 57. Gradients

### General Website

Avoid gradients.

Do not use:

```css
linear-gradient(...)
radial-gradient(...)
```

for standard UI components.

### Exception

Hero background media may naturally contain gradients or lighting because it is an image/video.

Do not recreate those colors in CSS unnecessarily.

---

# 58. Animations

Animations must feel premium and subtle.

Use:

```text
150ms
200ms
300ms
500ms
```

Avoid:

```text
1000ms+
```

unless required for a specific hero animation.

---

# 59. Scroll Animation

Recommended:

```text
opacity: 0 → 1
transform: translateY(20px) → 0
```

Duration:

```text
400–600ms
```

Use staggered animations for:

* Service cards
* Portfolio cards
* Process items

Do not animate every element independently.

---

# 60. Hover Behavior

### Text

```text
opacity: 1 → 0.60
```

### Links

```text
color: #0B0B0F → #EF4444
```

### Cards

```text
border-color: #E5E7EB → #EF4444
```

### Images

```text
scale: 1 → 1.03
```

Keep transitions subtle.

---

# 61. Accessibility

All components must be accessible.

Required:

* Keyboard navigation
* Visible focus state
* Sufficient contrast
* Semantic HTML
* Alt text
* Accessible buttons
* Accessible forms
* Proper heading hierarchy
* Touch-friendly mobile controls

Do not rely on color alone to communicate meaning.

---

# 62. Responsive Design

The website must be fully responsive.

Required devices:

```text
Large Desktop
Desktop
Laptop
Tablet
Mobile
Small Mobile
```

---

# 63. Breakpoints

Use:

```text
< 640px       Mobile
640–767px     Large Mobile
768–1023px    Tablet
1024–1279px   Laptop
1280–1535px   Desktop
1536px+       Large Desktop
```

---

# 64. Mobile Navigation

Desktop navigation must collapse on mobile.

Mobile:

```text
Logo                 Menu
```

Menu opens a clean full-width or full-height navigation panel.

Use:

```text
background: #0B0B0F
```

for dark Hero navigation.

Navigation links:

```text
white
```

Active:

```text
#EF4444
```

---

# 65. Mobile Hero

Hero must adapt rather than simply shrink.

Desktop:

```text
Text + visual composition
```

Mobile:

```text
Text
CTA
Visual
```

or maintain the visual as a background if the Hero design requires it.

Hero text must remain readable.

Recommended mobile H1:

```text
34–40px
```

Do not use desktop 64px typography on mobile.

---

# 66. Mobile Buttons

Primary CTA buttons should generally remain:

```text
inline-flex
```

When two buttons cannot fit:

```text
stack vertically
```

Example:

```text
Start a Project
Explore Services →
```

Avoid horizontally compressed buttons.

---

# 67. Mobile Cards

Cards should become:

```text
1 column
```

unless a 2-column layout remains genuinely usable.

Do not create tiny cards simply to preserve desktop grids.

---

# 68. Mobile Spacing

Reduce spacing proportionally.

Desktop:

```text
Section padding: 96px
```

Mobile:

```text
Section padding: 56px
```

Maintain visual breathing room.

---

# 69. Images

All images must be:

* Responsive
* Optimized
* Properly cropped
* Lazy-loaded where appropriate
* Accessible

Do not distort images.

Use:

```css
object-fit: cover;
```

where appropriate.

---

# 70. Hero Video Performance

Hero background video must:

* Autoplay
* Loop
* Be muted
* Use `playsInline`
* Have fallback poster image
* Not block page rendering
* Not cause layout shift

Example:

```html
<video
  autoplay
  muted
  loop
  playsinline
  poster="/hero-poster.webp"
>
```

On low-power/mobile environments, consider using the poster image instead of forcing heavy video playback.

---

# 71. Performance

The design must not compromise performance.

Optimize:

* Images
* Videos
* Fonts
* Icons
* Animations

Avoid:

* Huge unoptimized images
* Multiple background videos
* Excessive JavaScript animations
* Large animation libraries for simple effects

---

# 72. Page Architecture

Every page should follow a consistent visual rhythm.

Example:

```text
Navbar
↓
Page Hero
↓
Intro / Section
↓
Main Content
↓
Supporting Content
↓
CTA
↓
Footer
```

Do not randomly place CTAs or sections.

---

# 73. Service Pages

Each service page should follow the same design language.

Possible services:

```text
Web Development
Full-Stack Development
Mobile App Development
E-commerce Development
Custom Software
UI/UX Design
Business Websites
Web Applications
API Development
Maintenance & Support
```

Each service page:

```text
Hero
Problem
Solution
Capabilities
Technology
Process
Benefits
Portfolio
FAQ
CTA
Footer
```

---

# 74. Page Hero Design

Internal page Heroes should NOT reuse the full Homepage Hero video.

Use:

```text
White
#F8FAFC
#F7F5F5
```

or a controlled dark section.

Example:

```text
Web Development

High-performance websites and web applications
built around your business goals.

Start a Project
```

Use red as the accent.

---

# 75. Portfolio Page

Portfolio should prioritize visuals.

Structure:

```text
Portfolio Hero

Featured Projects

Project Grid

Technologies

Client Results

CTA
```

Cards should remain minimal.

---

# 76. About Page

Structure:

```text
About Hero

Who We Are

What We Believe

How We Work

Our Capabilities

Technology

Why Tekloria

CTA
```

Use more human natural tones:

```text
#F7F5F5
#EDE9E3
```

without overusing them.

---

# 77. Contact Page

Structure:

```text
Contact Hero

Contact Information

Project Form

What Happens Next

FAQ

CTA/Footer
```

Keep form simple.

Do not ask unnecessary questions.

---

# 78. Blog

Blog cards:

```text
Image
Category
Title
Excerpt
Date
Read article →
```

Background:

```text
#FFFFFF
```

Cards:

```text
border: #E5E7EB
```

Accent:

```text
#EF4444
```

---

# 79. Badges

Default badge:

```text
Background: #F8FAFC
Text: #475569
Border: #E5E7EB
```

Accent badge:

```text
Background: #FDECEC
Text: #7F0F16
```

Success badge:

```text
Background: #E6F4EA
Text: #1F2937
```

---

# 80. Dividers

Use subtle horizontal rules:

```text
#E5E7EB
```

or:

```text
rgba(11,11,15,0.10)
```

Never use thick decorative dividers.

---

# 81. Loading States

Use simple skeleton loaders.

Skeleton:

```text
#F8FAFC
```

Border:

```text
#E5E7EB
```

Do not use animated rainbow loaders.

---

# 82. Error States

Error:

```text
Soft Red: #FDECEC
Dark Red: #7F0F16
Accent: #EF4444
```

Keep errors clear and professional.

---

# 83. Success States

Success:

```text
#E6F4EA
```

Text:

```text
#1F2937
```

Icon:

```text
#1F2937
```

Do not introduce bright green.

---

# 84. Focus States

Keyboard focus:

```text
#EF4444
```

Use a visible but subtle focus ring.

---

# 85. Empty States

Use:

```text
White
#F8FAFC
#475569
```

with a simple icon.

Do not create colorful illustrations unless necessary.

---

# 86. Tables

Desktop:

* Clean borders
* White background
* Minimal headers
* Proper spacing

Mobile:

Tables must become horizontally scrollable or transform into cards.

Never allow tables to break the page width.

---

# 87. Mobile Overflow

Absolutely prevent:

```text
horizontal page scrolling
```

Check:

* Images
* Cards
* Buttons
* Navigation
* Tables
* Hero content
* Typography
* Long URLs
* Forms

---

# 88. Design Consistency Rules

Every component must answer:

1. Does it use the correct Tekloria colors?
2. Does it use the correct typography?
3. Does it use the correct spacing?
4. Does it use the correct radius?
5. Does it behave correctly on mobile?
6. Does it have consistent hover/focus states?
7. Does it avoid unnecessary shadows?
8. Does it avoid unnecessary gradients?
9. Does it visually belong to Tekloria?

If not, redesign it.

---

# 89. Forbidden Design Patterns

Do NOT introduce:

### Colors

```text
Random blue
Purple
Neon green
Orange
Yellow
Pink
```

### Effects

```text
Heavy shadows
Glassmorphism everywhere
Neon glow
Excessive blur
3D UI
Random gradients
```

### Layout

```text
Inconsistent card sizes
Random spacing
Misaligned sections
Overlapping text
Unnecessary floating elements
```

### Typography

```text
Too many fonts
Random font weights
Huge body text
Tiny unreadable text
```

---

# 90. Hero-Specific Rules

The current Hero is visually distinctive and must remain special.

Hero may use:

```text
Dark Red
Red
Black
White
Hero video/image
```

But this visual treatment must NOT leak into the rest of the website.

The Hero background video must end at the Hero boundary.

---

# 91. Current Hero Structure

Maintain:

```text
Hero
├── Background Media
├── Dark Overlay
├── Navbar
├── Intro / Typewriter Content
├── Main Heading
├── Supporting Text
├── Primary CTA
└── Secondary CTA
```

The next section begins with its own background.

---

# 92. Hero CTA

Primary:

```text
Start a Project
```

```text
#EF4444
```

Secondary:

```text
Explore Services →
```

Transparent with white border on dark Hero.

---

# 93. Hero Navigation

Navbar remains over the Hero.

Logo:

```text
White Tekloria + Red *
```

Navigation:

```text
White
```

Hover:

```text
White opacity 60%
```

CTA:

```text
White
```

---

# 94. Content Width

Hero text should never span the entire screen.

Recommended:

```text
max-width: 600–680px
```

This improves readability.

---

# 95. Text Readability Over Images

Any text placed over imagery must maintain strong contrast.

Use a controlled overlay.

Never solve readability by:

* Adding text shadows everywhere
* Using random colors
* Making text excessively bold

---

# 96. Component Architecture

Create reusable components.

Recommended:

```text
Navbar
Hero
SectionHeader
Button
ServiceCard
PortfolioCard
TechnologyCard
ProcessStep
TestimonialCard
FAQItem
ContactForm
CTASection
Footer
```

Do not duplicate styling across pages.

---

# 97. Design Tokens

All colors, spacing, typography, radius and transitions should ideally be centralized.

Example:

```css
--radius-card: 6px;
--radius-button: 9999px;

--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 32px;
--space-xl: 48px;
--space-2xl: 64px;
--space-3xl: 96px;

--transition-fast: 150ms;
--transition-normal: 250ms;
--transition-slow: 400ms;
```

---

# 98. Responsive Quality Standard

Before considering any page complete, test:

```text
1920px
1440px
1280px
1024px
768px
600px
480px
390px
375px
320px
```

Check:

* Navbar
* Hero
* Typography
* Images
* Cards
* Buttons
* Forms
* Footer
* Horizontal overflow
* Section spacing

---

# 99. Desktop vs Mobile Priority

Do not simply shrink desktop.

The mobile design should be intentionally composed.

Desktop:

```text
Large visual hierarchy
Multiple columns
Large whitespace
Horizontal navigation
```

Mobile:

```text
Focused hierarchy
Single-column layout
Compact spacing
Stacked CTAs
Collapsed navigation
Readable typography
```

---

# 100. Final Design Rule

The Tekloria website must visually communicate:

> **Ideas → Code → Real Solutions**

Every design decision should support that idea.

The website should feel:

```text
Clean
Modern
Technical
Creative
Human
Premium
Fast
Trustworthy
```

without becoming visually complicated.

---

# 101. Antigravity Implementation Directive

### IMPORTANT — READ BEFORE MODIFYING ANY UI

This `design.md` is the **global visual authority for the Tekloria project**.

Before creating or modifying any page:

1. Read this file.
2. Follow the color tokens.
3. Follow the typography hierarchy.
4. Follow the spacing system.
5. Follow the button system.
6. Follow the card system.
7. Follow the responsive rules.
8. Reuse existing components wherever possible.
9. Do not introduce new colors without explicit approval.
10. Do not introduce random gradients.
11. Do not introduce heavy shadows.
12. Do not create page-specific design systems.
13. Do not change the Hero visual identity unnecessarily.
14. **The Hero background media must remain scoped ONLY to the Hero section.**
15. **Never apply the Hero video/image as the global `body`, `html`, `main`, or application background.**
16. Every section after Hero must have its own defined background.
17. Ensure all pages work correctly on mobile.
18. Preserve the Tekloria logo treatment.
19. Maintain consistent CTA/button behavior.
20. Maintain visual consistency across the entire website.

---

# 102. Final Color Reference

| Token         | Color     | Primary Usage                       |
| ------------- | --------- | ----------------------------------- |
| Primary Black | `#0B0B0F` | Headings, dark sections, footer     |
| White         | `#FFFFFF` | Main backgrounds, dark-section text |
| Tekloria Red  | `#EF4444` | CTA, accents, active states         |
| Dark Red      | `#7F0F16` | Hero atmosphere                     |
| Charcoal      | `#1F2937` | Secondary text                      |
| Slate         | `#475569` | Body/supporting text                |
| Light Gray    | `#E5E7EB` | Borders/dividers                    |
| Soft Line     | `#F8FAFC` | Subtle backgrounds                  |
| Beige         | `#F7F5F5` | Human/about sections                |
| Sand          | `#EDE9E3` | Testimonials/supporting sections    |
| Soft Green    | `#E6F4EA` | Success states                      |
| Soft Red      | `#FDECEC` | Errors/warnings                     |
| Sky Gray      | `#EFF5F9` | Information/supporting UI           |

---

# 103. Final Typography Reference

| Element | Font    |  Weight | Desktop |  Mobile |
| ------- | ------- | ------: | ------: | ------: |
| H1      | Poppins |     700 | 48–64px | 34–40px |
| H2      | Poppins |     600 | 36–44px | 28–34px |
| H3      | Inter   |     600 |    24px | 21–24px |
| H4      | Inter   |     600 | 18–20px |    18px |
| Body    | Inter   |     400 |    16px | 15–16px |
| Small   | Inter   | 400–500 |    14px | 13–14px |
| Button  | Inter   | 500–600 | 14–16px | 14–16px |
| Label   | Inter   |     500 | 13–14px | 12–14px |

---

# 104. Final Visual Formula

```text
TEKLORIA DESIGN SYSTEM

60%
White / Neutral Space

20%
Black / Dark Surfaces

10%
Tekloria Red #EF4444

10%
Supporting Neutral Colors
```

With:

```text
Inter
+
Poppins
+
6px Cards
+
Pill Buttons
+
Minimal Borders
+
Minimal Shadows
+
No Random Gradients
+
Controlled Red Accent
+
Hero-Specific Visual Media
+
Strong Responsive Design
```

**This is the standard that every page and component in the Tekloria website must follow.**
