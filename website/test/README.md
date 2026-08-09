# website/test/

Test harness for website packages, mirroring the github-pages layout.

| Path | Role |
| --- | --- |
| `vitest.setup.ts` | Global Vitest setup (MSW + in-memory `localStorage`) |
| `unit/` | Fast unit tests (`components/`, `redux/`, `simulations/`, `utils/`) |
| `integration/` | Multi-module tests + `mocks/` (MSW handlers/server) |
| `cypress/` | Browser e2e + smoke (`e2e/`, `smoke/`, `cypress.config.js`) |

Point package Vitest configs at this tree (or co-locate package-specific tests under `website/src/<pkg>/test/` for module-local work).
