#!/usr/bin/env node
/**
 * Finish a static export (npm run build:static) for GitHub Pages.
 *
 * Runs after `vite build` with VITE_STATIC_EXPORT=1 has prerendered every page
 * into .output/public. Adds what Vercel used to do at the edge:
 * - redirect stubs for every vercel.json redirect (old product/guide slugs),
 * - 404.html, .nojekyll, CNAME and the PWA manifest.
 * Output: dist-static/ (a copy of .output/public), ready to upload to Pages.
 */
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { renderWebManifest } from "./grok-pwa-shared.mjs";

const SITE = "https://alsaidropship.com";
const src = ".output/public";
const out = "dist-static";

if (!existsSync(join(src, "index.html"))) {
  console.error(`[static-export] ${src}/index.html missing; did prerender run?`);
  process.exit(1);
}

rmSync(out, { recursive: true, force: true });
cpSync(src, out, { recursive: true });

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function redirectHtml(to) {
  const abs = to.startsWith("http") ? to : SITE + to;
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>Moved</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${esc(abs)}">
<meta http-equiv="refresh" content="0; url=${esc(to)}">
<script>location.replace(${JSON.stringify(to)} + location.search + location.hash)</script>
</head><body><p>This page moved to <a href="${esc(to)}">${esc(abs)}</a>.</p></body></html>
`;
}

const vercel = JSON.parse(readFileSync("vercel.json", "utf8"));
let stubs = 0;
for (const { source, destination } of vercel.redirects ?? []) {
  if (source.endsWith("/") || /\.[a-z0-9]+$/i.test(source) || source.includes(":")) continue;
  const file = join(out, source.replace(/^\//, ""), "index.html");
  if (existsSync(file)) continue; // never overwrite a real page
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, redirectHtml(destination));
  stubs++;
}

writeFileSync(
  join(out, "404.html"),
  `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Off course | Al's AI Drop Ship</title>
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<style>
body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;background:#faf7f2;color:#1c1917}
main{max-width:36rem;margin:0 auto;padding:5rem 1.25rem}
p.k{font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;color:#78716c}
h1{font-size:2.25rem;margin:.75rem 0}
a{color:#b45309;font-weight:600;margin-right:1.25rem}
</style></head>
<body><main>
<p class="k">Off course</p>
<h1>Al has no waypoint for that.</h1>
<p>That route is empty air. Open the cargo bay, or read the guides.</p>
<p><a href="/shop">Back to cargo</a><a href="/guides">Guides</a><a href="/">Home</a></p>
</main></body></html>
`,
);

writeFileSync(join(out, ".nojekyll"), "");
writeFileSync(join(out, "CNAME"), "alsaidropship.com\n");
mkdirSync(join(out, "__grok"), { recursive: true });
writeFileSync(join(out, "__grok", "manifest.webmanifest"), renderWebManifest("alsaidropship.com"));

console.log(`[static-export] ${out}/ ready: ${stubs} redirect stubs, 404.html, CNAME, .nojekyll`);
