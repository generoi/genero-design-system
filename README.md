# Genero Design System

```sh
npm run build
```

## SASS library

### Use the mixins as a component library

```scss
// Import the entire library
@use '~genero-design-system/scss' as gds;

// …or import individual components
@use '~genero-design-system/src/components/button' as button;

.button {
  @include gds.button-base;
  @include button.base;
}
```

### Use the entire design system

```scss
@use '~/genero-design-system/scss/gds' with (
  $button: true,
  $accordion: false
);
```
