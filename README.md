# Genero Design System

## SASS library

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

### Publishing a new version

```sh
npm version patch
git push
git push --tags
npm publish
```
