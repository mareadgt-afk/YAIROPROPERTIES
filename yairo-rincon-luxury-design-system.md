# Yairo Rincon Luxury Real Estate Design System

Brand mood: Aman Resorts x Architectural Digest x Miami luxury real estate. The system should feel quiet, rare, architectural, and cinematic: expansive black fields, precise white typography, petroleum green accents, tactile surfaces, and restrained motion.

## 1. Creative Direction

Yairo Rincon should not feel like a typical realtor website. It should feel like an invitation-only property journal: minimal, editorial, atmospheric, and exacting.

Core principles:

- Space is the luxury. Use fewer elements, larger margins, slower reveals.
- Typography leads. Let titles, prices, addresses, and short editorial copy carry the interface.
- Imagery is cinematic. Use high-contrast photography, dusk/night Miami light, architectural details, water, stone, glass, and shadow.
- Interactions are quiet but deliberate. Hover effects should feel premium, not playful.
- Brutalist touches should appear through rules, grids, uppercase labels, sharp divisions, and hard alignments.
- Glassmorphism is only an accent: small overlays, nav states, modals, and listing metadata panels.

## 2. Color Palette

### Core Neutrals

| Token | Hex | Use |
| --- | --- | --- |
| `--yr-black` | `#050505` | Primary background, navigation, hero sections |
| `--yr-ink` | `#111312` | Elevated dark panels, listing surfaces |
| `--yr-charcoal` | `#1A1D1B` | Cards, form fields, subtle contrast blocks |
| `--yr-smoke` | `#737873` | Secondary text on dark |
| `--yr-mist` | `#C7CAC4` | Borders, captions, quiet body text |
| `--yr-white` | `#F6F4EF` | Primary text on dark, light surfaces |
| `--yr-paper` | `#E9E5DC` | Editorial light backgrounds |

### Petroleum Green Accent

| Token | Hex | Use |
| --- | --- | --- |
| `--yr-petroleum` | `#123832` | Primary accent, CTAs, active nav |
| `--yr-petroleum-dark` | `#09231F` | Deep accent background |
| `--yr-petroleum-soft` | `#315850` | Hover, borders, icon accents |
| `--yr-petroleum-glass` | `rgba(18, 56, 50, 0.34)` | Glass overlays |

### Metallic and Warm Accents

| Token | Hex | Use |
| --- | --- | --- |
| `--yr-champagne` | `#C8B98D` | Rare premium details, rule highlights |
| `--yr-warm-shadow` | `#3B3328` | Cinematic depth, photo overlays |

Usage ratio:

- 72% black and near-black
- 18% white, paper, and mist
- 8% petroleum green
- 2% champagne

## 3. Typography System

The typographic voice should nod to Saint Laurent, The Row, and modern architecture magazines: severe, narrow, elegant, and editorial.

### Font Stack

Display serif:

```css
font-family: "Canela", "Cormorant Garamond", "Bodoni 72", "Didot", Georgia, serif;
```

Editorial sans:

```css
font-family: "Neue Haas Grotesk Display", "Helvetica Neue", Arial, sans-serif;
```

Monospace detail:

```css
font-family: "Suisse Intl Mono", "SFMono-Regular", Consolas, monospace;
```

### Type Scale

| Token | Desktop | Mobile | Use |
| --- | ---: | ---: | --- |
| `display-xl` | 112px / 0.88 | 58px / 0.92 | Hero brand statements |
| `display-lg` | 76px / 0.92 | 42px / 0.98 | Page titles |
| `headline` | 48px / 1.02 | 32px / 1.08 | Section leads |
| `title` | 28px / 1.12 | 24px / 1.15 | Listing names, card titles |
| `body-lg` | 20px / 1.55 | 18px / 1.55 | Editorial intro copy |
| `body` | 16px / 1.65 | 16px / 1.6 | General copy |
| `caption` | 12px / 1.35 | 11px / 1.35 | Metadata, labels |
| `mono-label` | 11px / 1.1 | 10px / 1.1 | UI labels, codes, stats |

Rules:

- Use letter spacing only for small uppercase labels: `0.12em` to `0.28em`.
- Do not add negative letter spacing.
- Keep body copy short and editorial.
- Hero headlines can be serif; UI labels should be sans or mono.
- Prices should be serif or tightly set sans, never decorative.

## 4. Spacing System

Base unit: `4px`.

| Token | Value | Use |
| --- | ---: | --- |
| `space-1` | 4px | Micro gaps |
| `space-2` | 8px | Small icon/text gaps |
| `space-3` | 12px | Compact controls |
| `space-4` | 16px | Form rows |
| `space-5` | 24px | Card padding mobile |
| `space-6` | 32px | Card padding desktop |
| `space-7` | 48px | Section internal rhythm |
| `space-8` | 64px | Editorial grouping |
| `space-9` | 96px | Section spacing |
| `space-10` | 128px | Hero and premium whitespace |
| `space-11` | 160px | Desktop page breaks |

Layout:

- Max content width: `1440px`
- Editorial text width: `640px`
- Listing grid gap: `24px` mobile, `32px` desktop
- Page side padding: `20px` mobile, `40px` tablet, `64px` desktop, `96px` wide

## 5. Border Styles

| Token | Value | Use |
| --- | --- | --- |
| `border-hairline` | `1px solid rgba(246,244,239,0.14)` | Dark UI divisions |
| `border-light` | `1px solid rgba(5,5,5,0.10)` | Light UI divisions |
| `border-accent` | `1px solid rgba(49,88,80,0.62)` | Active controls |
| `border-brutal` | `1px solid currentColor` | Editorial/brutalist statements |

Radius:

- Default radius: `0px`
- Cards: `2px` to `6px`
- Inputs: `0px` to `4px`
- Glass overlays: `8px` maximum
- Avoid pill-heavy UI except tiny metadata tags.

## 6. Shadows

Luxury shadows should be low and wide, like studio lighting.

```css
--shadow-cinematic: 0 34px 90px rgba(0, 0, 0, 0.42);
--shadow-soft: 0 18px 50px rgba(0, 0, 0, 0.28);
--shadow-card: 0 14px 34px rgba(0, 0, 0, 0.22);
--shadow-green: 0 24px 70px rgba(18, 56, 50, 0.28);
--inset-hairline: inset 0 0 0 1px rgba(246, 244, 239, 0.11);
```

Use shadows sparingly. Prefer contrast, borders, and image depth over obvious elevation.

## 7. Buttons

### Primary Button

Use for inquiry, schedule tour, request private consultation.

Visual:

- Petroleum green background
- White uppercase mono/sans label
- Thin champagne or petroleum-soft top border on hover
- Slight upward movement: `translateY(-1px)`
- Hover background deepens to `#09231F`

CSS:

```css
.btn-primary {
  background: #123832;
  color: #F6F4EF;
  border: 1px solid rgba(246, 244, 239, 0.16);
  padding: 16px 24px;
  font: 600 11px/1 "Helvetica Neue", Arial, sans-serif;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  transition: transform 420ms cubic-bezier(.16,1,.3,1), background 420ms ease, border-color 420ms ease;
}
```

### Secondary Button

Use for view listing, explore neighborhoods, read market report.

- Transparent background
- White or black border depending on surface
- Hover fills with foreground color and inverts text
- Add a thin rule animation from left to right

### Text Button

Use in editorial contexts.

- No box
- Uppercase, tiny label
- Animated underline offset
- Optional arrow symbol only when action changes page/view

## 8. Cards

### Editorial Card

Use for market notes, neighborhood insights, testimonials.

- Flat surface
- Hairline border
- 32px to 48px padding
- Title in serif
- Metadata in mono uppercase
- No heavy rounded corners

### Glass Detail Card

Use only over photography.

```css
background: rgba(17, 19, 18, 0.42);
backdrop-filter: blur(18px);
border: 1px solid rgba(246, 244, 239, 0.12);
```

Do not use glass for every card. It should feel like a rare lens over an image.

## 9. Listing Cards

Listing cards should feel like auction catalog entries, not marketplace tiles.

Structure:

- Image first, full-bleed within card
- Price large, serif or refined sans
- Address concise
- Neighborhood label in mono uppercase
- Stats as a single row: beds, baths, interior sf, lot/waterfront
- CTA appears on hover or as a quiet bottom rule

Desktop behavior:

- 3-column grid for standard listings
- Featured listing can span 2 columns
- Hover image scale: `1.025`
- Overlay fades in from `opacity: 0` to `1`
- Metadata panel slides up `10px`

Mobile behavior:

- Single-column cards
- CTA is always visible
- Image aspect ratio: `4 / 5` for editorial drama
- Price and address stay outside image for readability

## 10. Forms

Forms should feel concierge-level.

Fields:

- Large vertical rhythm
- Transparent or charcoal backgrounds
- Hairline borders
- Labels in mono uppercase
- Focus ring in petroleum green
- Error text in muted champagne, not aggressive red unless legally required

Inputs:

```css
.field input,
.field textarea,
.field select {
  background: rgba(246, 244, 239, 0.035);
  border: 1px solid rgba(246, 244, 239, 0.16);
  color: #F6F4EF;
  padding: 18px 0 14px;
  border-width: 0 0 1px;
}
```

Preferred form sections:

- Name
- Email
- Phone
- Desired neighborhood
- Budget range
- Purchase timeline
- Message
- Consent microcopy

## 11. Navigation

Desktop:

- Fixed top nav, transparent over hero
- Becomes black glass after scroll
- Brand left, primary links centered/right
- CTA at far right
- Height: 76px to 88px
- Use hairline bottom border only after scroll

Mobile:

- Logo left, menu icon right
- Full-screen menu with black background
- Menu items as large serif text
- Secondary links in mono uppercase
- CTA pinned to bottom

Nav link hover:

- Text color shifts from mist to white
- Underline grows from center or left
- Optional petroleum green dot for active state

## 12. Transitions and Motion

Motion language: cinematic, slow, precise.

Timing:

```css
--ease-luxury: cubic-bezier(.16, 1, .3, 1);
--ease-editorial: cubic-bezier(.77, 0, .175, 1);
--duration-fast: 180ms;
--duration-base: 420ms;
--duration-slow: 900ms;
--duration-cinematic: 1300ms;
```

Patterns:

- Page entrance: opacity + vertical reveal, `24px` movement, `900ms`
- Listing hover: image scale + overlay fade, `700ms`
- Menu open: full-screen wipe from right or top, `900ms`
- Hero media: slow zoom from `scale(1.04)` to `scale(1)`
- Section reveal: stagger children by `90ms`
- Button hover: immediate enough to feel responsive, `300ms` to `420ms`

Accessibility:

- Honor `prefers-reduced-motion`.
- Do not animate essential form feedback too slowly.

## 13. Luxury UI References

Use these as directional references, not copies:

- Aman Resorts: quiet confidence, expansive spacing, retreat-like atmosphere.
- Architectural Digest: editorial hierarchy, large photography, refined captions.
- Saint Laurent: severe black/white contrast, fashion-house typography, restraint.
- The Row: minimal luxury, softness through material and proportion rather than decoration.
- Modern architecture magazines: grid discipline, wide margins, asymmetric layouts.
- Private banking interfaces: controlled hierarchy, low-noise forms, trust through precision.
- Gallery catalog systems: listings presented as curated objects, not inventory.

## 14. Component Inventory

Required components:

- Global nav
- Mobile menu
- Hero section
- Property search filter bar
- Primary/secondary/text buttons
- Featured listing
- Listing card
- Editorial card
- Market stat row
- Neighborhood card
- Testimonial quote block
- Contact/concierge form
- Footer
- Modal inquiry form
- Toast/confirmation state
- Empty listing state
- Loading skeleton

## 15. Mobile Responsive Behavior

Breakpoints:

```css
--bp-sm: 480px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
--bp-xxl: 1536px;
```

Mobile rules:

- Collapse all property grids to one column.
- Preserve whitespace, but reduce section spacing from `96-160px` to `56-88px`.
- Hero height should be `82svh` minimum, not forced to `100vh` if content becomes cramped.
- Use bottom sticky CTAs only on high-intent pages such as property detail and contact.
- Turn dense stat rows into two-column grids.
- Keep form fields full width.
- Avoid hiding key listing metadata behind hover.
- Use image ratios intentionally: `4 / 5` for listings, `16 / 10` for neighborhood bands, `1 / 1` for agent/editorial tiles.

## 16. Implementation Tokens

```css
:root {
  --yr-black: #050505;
  --yr-ink: #111312;
  --yr-charcoal: #1A1D1B;
  --yr-smoke: #737873;
  --yr-mist: #C7CAC4;
  --yr-white: #F6F4EF;
  --yr-paper: #E9E5DC;
  --yr-petroleum: #123832;
  --yr-petroleum-dark: #09231F;
  --yr-petroleum-soft: #315850;
  --yr-champagne: #C8B98D;
  --yr-radius-card: 4px;
  --yr-border-dark: 1px solid rgba(246,244,239,.14);
  --yr-border-light: 1px solid rgba(5,5,5,.10);
  --yr-ease-luxury: cubic-bezier(.16,1,.3,1);
  --yr-ease-editorial: cubic-bezier(.77,0,.175,1);
}
```

## 17. Brand Voice in UI

Use concise, private, editorial language:

- "Private Consultation"
- "Request the Dossier"
- "View Residence"
- "Curated Miami Estates"
- "Waterfront Portfolio"
- "By Appointment"
- "Market Intelligence"
- "Off-Market Access"

Avoid:

- "Find your dream home"
- "Amazing deals"
- "Call now"
- Overly friendly exclamation-heavy copy

