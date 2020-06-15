# Genero Design System

## Usage

### Javascript

Using lazy loaded ES modules.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script type="module">
      import { applyPolyfills, defineCustomElements } from 'https://unpkg.com/genero-design-system/loader/index.mjs'
      applyPolyfills().then(() => {
        defineCustomElements()
      })
    </script>
  </head>
  <body>
    <gds-button>button</gds-button>
  </body>
</html>
```

Or if you want to bundle the library with your own build system.

```js
import { applyPolyfills, defineCustomElements } from 'genero-design-system/loader'

applyPolyfills().then(() => {
  defineCustomElements()
})

const render = () => {
  return `<gds-button>button</gds-button>`
}
```

### React components

```js
import { GdsButton } from 'genero-design-system/react'

const render = () => {
  return <GdsButton>button</GdsButton>
}
```

### SASS library

There's no main entrypoint for all mixins, you are instead encouraged to encapsulate all dependencies in the files that they are used.

```scss
// Import component
@use '~genero-design-system/src/components/gds-button' as button;

.button {
  @include button.base;
}
```

## Development

```sh
npm run build
```

### Commits

Commits will be linted according to [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

you can also use [commitizen](https://commitizen.github.io/cz-cli/)

### Publishing a new version

#### Create release

generate changelog and bump the version based on commit log

```sh
npm run release
```

---

#### Create a named prerelease version

```sh
npm run release -- --prerelease beta
```

#### Manually specifify the version bump

```sh
npm run release -- --release-as minor
npm run release -- --release-as 1.1.0
```

see [conventional-changelog/standard-version#cli-usage](https://github.com/conventional-changelog/standard-version#cli-usage) for more details and examples

---

#### Push and publish release

```sh
git push
git push --tags
npm publish
```
