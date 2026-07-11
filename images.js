/* ════════════════════════════════════════════════════════════════
   SITE IMAGE REGISTRY
   ════════════════════════════════════════════════════════════════
   This is the ONLY place you need to edit when an image FILE NAME
   changes (e.g. you replace ashish.png with ashish-2026.png, or
   move logos into a new folder).

   HOW IT WORKS:
   Every <img> tag on the site that uses one of these images carries
   a "data-img" attribute instead of (or alongside) a hardcoded path,
   e.g.  <img data-img="logoLight" src="images/logo-light.png">

   On page load, main.js reads this object and sets the real `src`
   of every [data-img] element to the path below. The src already
   in the HTML is just a safe fallback in case this file fails to
   load — you do not need to edit it.

   TO SWAP AN IMAGE: change the path on the right below. Every page
   that uses that image updates automatically — no HTML edits.
   TO ADD A NEW MANAGED IMAGE: add a new key here, then add
   data-img="yourKey" to the <img> tag(s) that should use it.
   ════════════════════════════════════════════════════════════════ */

const SITE_IMAGES = {
  // AKap Group corporate identity
  logoLight: 'images/logo-light.png',   // light/white logo — used on dark navbars
  logoDark:  'images/logo-dark.png',    // dark logo — used on footers / light backgrounds

  // MizoFlo brand identity
  mizofloLogo: 'images/mizoflo-logo.png',

  // Leadership headshots
  ashish: 'images/ashish.png',
  kundan: 'images/kundan.png',

  // Hero / banner photography. Drop a wide (2400×1400px+) landscape
  // photo at this path and the homepage hero will use it behind a
  // brand-color scrim automatically. If the file doesn't exist yet,
  // the hero just falls back to the navy gradient — totally safe
  // to leave unset.
  heroHome: 'images/hero-home.jpg',

  // ── MizoFlo Pipes & Fittings — page imagery ──────────────────
  // Hero banner photo behind the "MizoFlo Pipes & Fittings" page
  // title (e.g. a pipes/fittings photo). Same safe-fallback
  // behavior as heroHome — if the file is missing, the plain navy
  // gradient shows through instead.
  mizofloHero: 'images/mizoflo-hero-pipes.jpg',

  // Product family mockups shown on the MizoFlo page. These are
  // meant to be background-less (transparent) PNGs of the product
  // itself, not photos — the mockup card gives them a soft tinted
  // panel to sit on instead of a hard white/checkerboard edge.
  mizofloCpvcMockup: 'images/mizoflo-cpvc-mockup.png',
  mizofloUpvcMockup: 'images/mizoflo-upvc-mockup.png',

  // Add new managed images below this line as the MizoFlo product
  // range grows — just add a key + path, then add
  // data-img="yourKey" to a new <img> tag wherever it should appear.
};
