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
npm install
npm run build
```

Run storybook

```sh
npm run storybook
```

### Publishing a new version

```sh
npm version patch
git push
git push --tags
npm publish
```
