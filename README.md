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

- Copy `gds-button/_index.scss` the the new component's folder.
- Rename the stylesheet from .css to .scss and use the `gds-button.scss` as a basis.
- Add a component.stories.js file.
- Add a README.md file

Build and watch the component and generate readme.md docs.
TODO: This should also watch changes in \_index.scss files.

```sh
npm run start
```

### Style Guide

While we don't have our internal Style Guide, let's use the same as Stencil core team: https://stenciljs.com/docs/style-guide

### Docs

- On Properties: https://stenciljs.com/docs/properties

### Tips, tricks, and gotchas

Please add here, when you solve something you got stuck at.

- In HTML, attributes need to use dash-case. In JSX you use camelCase.
- When you add new components, it's best to restart build watcher because it usually breaks here.
- Use `/public` folder for static assets in stories.
- Use `/.storybook/preview-head.html` to inject code stories.

### Storybook roadmap

- Add props table: https://github.com/storybookjs/storybook/tree/next/addons/docs/web-components#props-tables

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
