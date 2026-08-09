# stack/

Framework host packages for this polyglot template.

| Directory | Role | Framework pairing |
| --- | --- | --- |
| [`next/`](next/) | Next.js App Router host config / TypeScript env | React |
| [`nuxt/`](nuxt/) | Nuxt 3 app scaffold (static-capable) | Vue |

These mirror the layout used by other repos in this org (`github-pages/stack/{next,eslint}`, `Project-Mobile-Fortress/docs/website/stack/{nuxt,eslint}`). Wire root re-exports or npm workspaces when a concrete app package is generated from this template.
