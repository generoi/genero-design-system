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

### Creating a new component

Use the `gds-button` component as a basis for the new component.

Use Stencil CLI to generate a new component:

- Component naming example: `gds-my-component`
- Skip test files for now. We need to think about those later.

```sh
npm run generate
```

Next do the following:

- Rename the stylesheet from .css to .scss
- Add a compoent.stories.js file.
- Add a README.md file

Build and watch the component and generate readme.md docs.

```sh
npm run build:stencil --watch
```

### Style Guide

While we don't have our internal Style Guide, let's use the same as Stencil core team: https://stenciljs.com/docs/style-guide

### Storybook roadmap

- Add props table: https://github.com/storybookjs/storybook/tree/next/addons/docs/web-components#props-tables

### Publishing a new version

```sh
npm version patch
git push
git push --tags
npm publish
```
