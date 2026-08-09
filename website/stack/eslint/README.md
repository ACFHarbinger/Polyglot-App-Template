# website/stack/eslint/

ESLint configuration for Polyglot-App-Template web surfaces (Next host, Nuxt host, and `website/src` modules).

| File | Role |
| --- | --- |
| `.eslintrc.json` | Base recommended rules + Next override for TS/TSX |

## Usage

From the repo root (or a package that installs `eslint` / `eslint-config-next`):

```bash
npx eslint -c website/stack/eslint/.eslintrc.json website/src
```

Consumers may re-export this file from a package-level `.eslintrc.cjs`:

```js
module.exports = require('./website/stack/eslint/.eslintrc.json');
```
