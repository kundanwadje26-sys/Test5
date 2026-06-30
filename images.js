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
};
