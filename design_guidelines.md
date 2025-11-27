# Design Guidelines - Premium Marketing Landing Page

## Design Approach
**Reference-Based**: High-end marketing/agency aesthetic (similar to premium Webflow templates, Stripe marketing pages) with strong conversion focus and neuromarketing principles.

## Color Palette (Mandatory)
```
Primary: #9D6135 (warm brown/copper)
Dark: #232326 (deep charcoal)
Accent: #CDA580 (light gold/tan)
Light: #F8F7F2 (warm off-white)
```

## Typography Hierarchy
- **Headlines**: Serif font (elegant, authoritative) - sizes: text-4xl to text-6xl
- **Body Copy**: Sans-serif (clean, readable) - sizes: text-base to text-lg
- **Microcopy/CTAs**: Sans-serif medium weight
- Use generous line-height for readability (leading-relaxed)

## Layout System
- **Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-8, py-16, mb-12, etc.)
- **Containers**: max-w-6xl to max-w-7xl centered
- **Mobile-first**: Stack vertically on mobile, horizontal layouts on desktop (md: and lg: breakpoints)

## Page Structure (6 Mandatory Sections)

### 1. Hero Section (Full-screen)
- Minimum height: h-screen
- Soft gradient background using primary/accent colors
- Large hero image with sophisticated overlay
- Centered content layout with generous padding
- Primary CTA button (prominent, scale on hover)
- Secondary urgency microcopy below CTA
- 3 bullet points with checkmarks

### 2. "Por Que Agora?" Section
- Background: light color (#F8F7F2)
- Centered text block with max-w-4xl
- Strong headline + persuasive copy blocks
- Urgency box/callout with accent border

### 3. "Os 3 Pilares" Section
- Three horizontal cards on desktop (grid-cols-1 md:grid-cols-3)
- Each card: Light background, rounded-2xl, soft shadow
- Minimalist Heroicons at top
- Title + description per card
- Subtle hover elevation effect

### 4. "O Que Você Vai Receber" Section
- Background: white/light
- 4 bullet points with value propositions
- Icons or checkmarks before each item
- Authority microcopy block below

### 5. Escassez Section (Scarcity Block)
- Background: Dark color (#232326)
- Text: Light color (#F8F7F2)
- Centered layout
- Prominent CTA in accent/gold color
- Urgency-focused copy

### 6. Footer
- Background: Dark (#232326)
- Text: Light (#F8F7F2)
- Minimalist layout: agency name, copyright, WhatsApp link
- Subtle spacing, clean typography

## Component Design

### CTA Buttons
- Primary: bg-primary with text-light, rounded-lg, px-8 py-4
- Hover: Subtle scale (scale-105) + brightness increase
- Accent variant: bg-accent for high-priority actions
- All buttons link to WhatsApp (configurable number)

### Cards
- Rounded-2xl corners
- Light background with subtle shadow (shadow-lg)
- Padding: p-6 to p-8
- Hover: translate-y-1 with shadow increase

### Icons
- Use Heroicons (via CDN)
- Size: w-8 h-8 to w-12 h-12
- Color: primary or accent

## Animations
- Smooth scroll animations (framer-motion or CSS transitions)
- Fade-in on scroll for sections
- Hover states: scale, brightness, shadow changes
- Duration: 200-300ms for interactions
- Keep subtle and premium-feeling

## Images
- **Hero Section**: Large background image (full-width) showing professional marketing/business context
- Apply overlay gradient (primary color at 40-60% opacity) for text readability
- Modern, aspirational imagery aligned with target audience (entrepreneurs, small business owners)

## Responsive Behavior
- Mobile: Single column, stacked sections, full-width cards
- Tablet (md:): 2-column grids where appropriate
- Desktop (lg:): 3-column grids for cards, wider containers
- Hero maintains full viewport height across all devices

## WhatsApp Integration
- All CTAs open: `https://wa.me/5541984804266?text=Olá!%20Quero%20minha%20estratégia%20personalizada.`
- Number should be easily configurable in component props/constants