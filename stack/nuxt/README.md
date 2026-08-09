# stack/nuxt/

Nuxt 3 host package — the **Vue** counterpart to [`../next/`](../next/) (Next.js / React).

| Path | Role |
| --- | --- |
| `nuxt.config.ts` | Nuxt config (static Nitro preset, base URL) |
| `app.vue` | Root Nuxt app shell |
| `pages/` | File-based routes |
| `package.json` | Isolated Nuxt dependency set |

## Usage

```bash
cd stack/nuxt
npm install
npm run dev        # http://localhost:3000
npm run generate   # static output under .output/public
```

## Pairing with Next

| Directory | Stack |
| --- | --- |
| `stack/next/` | Next.js + React host config |
| `stack/nuxt/` | Nuxt 3 + Vue host scaffold |

Use one primary host per generated app, or compose both as multi-framework demos. Shared libraries (forms, state, islands) can live under a top-level `src/` when the concrete module is scaffolded.
