# website/test/

Test harness for website packages, mirroring the github-pages layout (simplified unit tree).

| Path | Role |
| --- | --- |
| `vitest.setup.ts` | Global Vitest setup (MSW + in-memory `localStorage`) |
| `unit/components/` | Component unit tests (example `smoke.test.ts`) |
| `unit/utils/` | Utility unit tests |
| `integration/` | Multi-module tests + `mocks/` (MSW handlers/server) |
| `cypress/` | Browser e2e + smoke (`e2e/`, `smoke/`, `cypress.config.js`) |

Point package Vitest configs at this tree (or co-locate package-specific tests under `website/src/<pkg>/test/` for module-local work).
