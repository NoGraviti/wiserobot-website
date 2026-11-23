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
- Hero robot is now `assets/robot-hero.svg` (owner's image recoloured flat #555555 grey with no outlines except the gloves (outlined in the same grey), orange beacon pulses, eyes blink; image embedded, source copy `assets/robot-silver.png`). Loaded by `index.html` and `rochdale.html` with `?v=32`. The old hand-drawn `assets/hero-illustration.svg` is no longer used.
- Not yet checked: mobile layout and the other pages after the redesign.
