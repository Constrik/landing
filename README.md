# constrik.com landing

Sitio público de marketing de Constrik. Estático, una sola página.

## Stack

- HTML estático + CSS (Tailwind CDN) + JSX compilado a JS plano vía esbuild
- React 18 UMD desde unpkg (no bundleado, cacheado por el navegador)
- Geist + Geist Mono desde Google Fonts
- Sin framework: no Next, no router, no SSR. Es 1 página.

## Estructura

```
constrik-landing/
├── src/
│   ├── sections.jsx   # todos los componentes de la landing
│   └── entry.jsx      # render con los tweaks hardcoded de producción
├── assets/            # favicon + logos
├── build.mjs          # script de build (esbuild + concat + HTML shell)
├── package.json
├── vercel.json        # config para Vercel
└── dist/              # output (gitignored)
```

## Desarrollo local

```bash
npm install
npm run build:dev    # genera dist/ sin minificar
npm run serve        # sirve dist/ en http://localhost:4323
```

Tras tocar `src/sections.jsx`:

```bash
npm run build:dev && open http://localhost:4323
```

## Production build

```bash
npm run build        # minificado (BUILD_MIN=1)
```

Vercel ejecuta `npm run build` automáticamente en cada `git push origin main`.

## Deploy

Vercel detecta `vercel.json` y publica `dist/`. Configurar el dominio
`constrik.com` desde el panel de Vercel → Settings → Domains.

## Modificar el contenido

- **Copy** (textos, títulos, párrafos): edita `src/sections.jsx`.
- **Tweaks** (URL de "Pedir demo", URL del login, mostrar/ocultar pricing):
  edita `PROD_TWEAKS` en `src/entry.jsx`.
- **Precio**: la constante `PRICE_EUR_OBRA` en `src/sections.jsx`.
- **Estilos globales**: el `<style>` inline en `build.mjs`.

## Por qué no usamos un bundler real

La landing es 4 secciones de copy. No tiene routing, ni dependencias de NPM
en runtime (React viene de CDN). Un bundler tipo Vite añadiría 200 MB de
node_modules para servir 23 KB de JS. Cuando la landing crezca (blog,
multi-página, formularios server-side) será el momento de pasar a Next.
