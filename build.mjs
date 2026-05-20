#!/usr/bin/env node
/**
 * constrik.com landing — production build.
 *
 * Pipeline:
 *   1. Read src/sections.jsx + src/entry.jsx (both authored with JSX).
 *   2. Pass each through esbuild.transform to strip JSX to plain JS.
 *   3. Concatenate sections.js + entry.js -> dist/bundle.js
 *      (sections.jsx ends with Object.assign(window, {...}) exposing
 *      its components as globals, which entry.jsx then references —
 *      no module system needed, just script-order load).
 *   4. Write a self-contained dist/index.html that loads:
 *        - React + ReactDOM UMD via unpkg CDN
 *        - Tailwind via CDN (with brand config inline)
 *        - Geist + Geist Mono via Google Fonts CDN
 *        - bundle.js (our compiled JSX)
 *   5. Copy assets/ -> dist/assets/
 *
 * Run:
 *   npm install        # one-off
 *   npm run build      # produces dist/
 *
 * Output:
 *   dist/              ← what Vercel publishes
 *     index.html
 *     bundle.js
 *     assets/
 *
 * Build is intentionally cheap: no React bundling (CDN), no Tailwind
 * compilation (CDN). The landing is 4 sections of static copy; the
 * cost of a real bundler is not worth the complexity. If the landing
 * grows (multiple routes, image optimization, ISR, …) we'd switch to
 * Next.js — but until then, this is enough.
 */

import { transform } from "esbuild";
import { readFile, writeFile, mkdir, copyFile, rm, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_DIR = join(__dirname, "src");
const ASSETS_DIR = join(__dirname, "assets");
const DIST_DIR = join(__dirname, "dist");
const DIST_ASSETS = join(DIST_DIR, "assets");

const JSX_OPTS = {
  loader: "jsx",
  jsx: "transform",
  jsxFactory: "React.createElement",
  jsxFragment: "React.Fragment",
  // Set BUILD_MIN=1 in env to minify. Vercel sets it automatically via
  // the "build" script in package.json (npm run build:min).
  minify: process.env.BUILD_MIN === "1",
};

async function compileFile(path) {
  const source = await readFile(path, "utf8");
  const result = await transform(source, JSX_OPTS);
  return result.code;
}

async function copyDir(srcDir, destDir) {
  await mkdir(destDir, { recursive: true });
  const entries = await readdir(srcDir, { withFileTypes: true });
  for (const e of entries) {
    if (e.isFile()) {
      await copyFile(join(srcDir, e.name), join(destDir, e.name));
    }
  }
}

async function main() {
  console.log("[constrik-landing] build start");

  // 1. Clean & recreate dist
  if (existsSync(DIST_DIR)) await rm(DIST_DIR, { recursive: true });
  await mkdir(DIST_ASSETS, { recursive: true });

  // 2. Compile JSX sources
  const sectionsJs = await compileFile(join(SRC_DIR, "sections.jsx"));
  const entryJs = await compileFile(join(SRC_DIR, "entry.jsx"));

  const bundle = [
    "// constrik.com landing — generated bundle. Do not edit by hand.",
    "// Source: src/sections.jsx + src/entry.jsx",
    "(function () {",
    "  'use strict';",
    sectionsJs,
    entryJs,
    "})();",
  ].join("\n");

  const bundlePath = join(DIST_DIR, "bundle.js");
  await writeFile(bundlePath, bundle, "utf8");
  console.log(`[constrik-landing] wrote bundle.js (${bundle.length} bytes)`);

  // 3. Write HTML shell
  const html = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Constrik — IA para los departamentos de estudios</title>
  <meta name="description" content="Constrik es una plataforma de Inteligencia Artificial para los departamentos de estudios de las constructoras. Reduce los plazos de estudios, centraliza el conocimiento, reduce errores en las licitaciones y prepara la obra para que sea más eficiente." />
  <meta name="theme-color" content="#1A1A2E" />

  <meta property="og:title" content="Constrik" />
  <meta property="og:description" content="IA para los departamentos de estudios de las constructoras." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://constrik.com" />
  <meta property="og:image" content="https://constrik.com/assets/constrik-icon-navy-bg.png" />

  <link rel="icon" type="image/png" href="assets/constrik-icon-navy-bg.png" />
  <link rel="apple-touch-icon" href="assets/constrik-icon-navy-bg.png" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet">

  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Geist', 'system-ui', 'sans-serif'],
            mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
            logo: ['Georgia', 'serif'],
          },
          colors: {
            navy: '#1A1A2E',
            teal: '#00CED1',
          },
        },
      },
    }
  </script>
  <style>
    html, body { background: #ffffff; }
    body { font-family: Geist, system-ui, sans-serif; color: #0f172a; -webkit-font-smoothing: antialiased; }
    .font-logo { font-family: Georgia, serif; letter-spacing: -0.01em; }
    .accent-underline { background-image: linear-gradient(180deg, transparent 62%, rgba(0,206,209,0.45) 62%, rgba(0,206,209,0.45) 92%, transparent 92%); padding: 0 0.05em; }
    .hero-grid { background-image: radial-gradient(circle at center, rgb(15 23 42 / 0.07) 1px, transparent 1.5px); background-size: 28px 28px; }
  </style>
</head>
<body>
  <div id="root"></div>

  <script crossorigin src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
  <script src="bundle.js"></script>
</body>
</html>
`;
  await writeFile(join(DIST_DIR, "index.html"), html, "utf8");
  console.log("[constrik-landing] wrote index.html");

  // 4. Copy assets
  await copyDir(ASSETS_DIR, DIST_ASSETS);
  console.log("[constrik-landing] copied assets");

  console.log("[constrik-landing] done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
