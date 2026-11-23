# WiseRobot website (wiserobot.co.uk)

Static HTML/CSS/JS site. Repo: `NoGraviti/wiserobot-website`, branch `main`. Pushing to `main` publishes it (Cloudflare in front).

## How to work
- Preview locally: `python -m http.server 8765` in this folder, then open `http://127.0.0.1:8765/index.html`.
- Publish: commit and push to `main` without asking (owner's rule, 2026-11-23). Check for secrets first, never force-push.
- Cloudflare caches CSS, JS and images for 4 hours. After changing `css/style.css`, `js/nav.js` or `assets/hero-illustration.svg`, bump the `?v=` number on every page that loads it. Do not request a new `?v=` URL on the live site before the deploy finishes (about 1 minute), or the old file gets cached under it. Check the live HTML with a random query string (`/?x=123`) first.

## Where things are
- `index.html` (home), `products.html`, `industries.html`, `contact.html`, `rochdale.html`, `blog/`, `products/`.
- `css/style.css`: base styles at the top, then a "Bright & friendly refresh" block at the bottom that overrides them.
- `js/nav.js`: mobile menu plus fade-in on scroll.
- `assets/hero-illustration.svg`: the hero robot (used by `index.html` and `rochdale.html`). `logo-dark.svg`, `logo-light.svg`, `favicon.svg`.

## Design decisions (owner's choices, do not undo)
- Bright and friendly look. Font Plus Jakarta Sans (loaded by `@import` in the CSS).
- Palette is only teal (`#0ea5a4` buttons) and orange/coral (`#ff7a59`). No navy, no blue or yellow accents. Dark text and footer use deep teal `#134e4a`.
- No shadows anywhere except on the robot. (The focus ring on form fields is kept for accessibility.)
- Hero: one short sentence of text. No orange glow on the left. Robot only, no floating icons or background bubble, no up-and-down floating animation.
- Robot mascot: based on the logo head (wide squat head, raised bump with antenna, side pods, tall oval eyes), big head and small pear body, smile, no cheek colour, orange beacon on the antenna, thumbs-up with the right hand, resting hand on the left. Latest version is dark silver with light reflections.

## Status and open items
- Hero robot is `assets/robot-hero.svg` (owner's outlined grey mascot image embedded, with teal-filled eyes that blink and an teal beacon that pulses; loaded by `index.html` and `rochdale.html` with `?v=40`; animation always plays (no reduced-motion override); shadow is a smooth SVG gradient; chest shows a teal lightning bolt, background removed so it sits on the page).
- Not yet checked: mobile layout and the other pages after the redesign.
- Contact: no phone number anywhere on the site (owner's rule, 2026-11-23). The contact form (`contact.html` + `js/contact-form.js`) posts to the n8n webhook `https://n8n.wiserobot.co.uk/webhook/wiserobot-contact` (workflow "WiseRobot - website contact form"), which saves each enquiry to the data table `website_enquiries` and emails the enquiry to the inbox that hello@wiserobot.co.uk forwards to (the address is set in the n8n workflow, not in this repo; sending to hello@ directly was hidden by Gmail). It has a hidden spam-trap field named `website`.
- Structure (2026-11-23): the home page is a services overview linking to four service pages: `web-design.html`, `ai-automation.html` (all the old home-page automation content, packages and FAQs moved here), `branding.html`, `seo.html` (plus local pages `seo-rochdale.html`, `seo-manchester.html`, `seo-greater-manchester.html`). Nav shows only those four plus Get In Touch; Products, Industries and Guides are in the footer. Each service page has its own animated mascot (`assets/robot-web.svg`, `robot-ai.svg`, `robot-graphic.svg`, `robot-seo.svg`, built from `robot-hero.svg` plus props). No prices on web, graphic or SEO pages (owner's choice); AI packages keep their prices. Dark band (#444444, like the footer) is used for the How It Works sections (`section.dark`).
- AI Automation is the main service (owner's rule, 2026-11-23): first in the nav and footer, and the featured card on the home page, with the home hero about automation. Logo: robot icon teal (#0ea5a4), wordmark dark grey (#444444); white wordmark with lighter teal icon in the footer logo.
- Nav (2026-11-23): AI Automation, then a Marketing dropdown (Web Design, Branding, SEO), then Get In Touch. The old Graphic Design page is now `branding.html` (branding for businesses), still using the palette-and-brush mascot (`assets/robot-graphic.svg`). Pages are generated from small scripts, not edited by hand, so edit them directly from now on.
- Logo files (`assets/logo-dark.svg`, `logo-light.svg`) have the wordmark converted to outlines (Montserrat: "Wise" Medium and "Robot" Bold, tightened spacing, sized and centred against the robot head), so it never falls back to another font. Do not turn it back into live text. Bump `?v=` on the logo when changing it.
- Pricing (2026-11-23, Claude's suggestion, owner approved the approach): AI Automation packages are Starter £750 setup + £75/month, Growth £1,800 setup + £150/month, Custom from £3,500. Based on UK small-business automation benchmarks (mostly agency web pages, no independent source); prices appear on `ai-automation.html` and `rochdale.html`, with matching ranges in `blog/business-automation-cost-uk.html`, the home featured card and the `priceRange` in the page data. Change them in all of those places together. Web design, branding and SEO deliberately show no prices. A Home link shows in the menu on every page except the home page, and Products has its own menu item and page (`products.html`).
