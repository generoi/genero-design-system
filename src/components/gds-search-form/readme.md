# gds-search



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                 | Description | Type      | Default     |
| ----------------------- | ------------------------- | ----------- | --------- | ----------- |
| `accessibleInputLabel`  | `accessible-input-label`  |             | `string`  | `'Search'`  |
| `accessibleSubmitLabel` | `accessible-submit-label` |             | `string`  | `'Search'`  |
| `action`                | `action`                  |             | `string`  | `undefined` |
| `collapsed`             | `collapsed`               |             | `boolean` | `false`     |
| `floating`              | `floating`                |             | `boolean` | `false`     |
| `placeholder`           | `placeholder`             |             | `string`  | `'Search'`  |
| `query`                 | `query`                   |             | `string`  | `'s'`       |


## Dependencies

### Depends on

- [gds-input-wrapper](../gds-input-wrapper)

### Graph
```mermaid
graph TD;
  gds-search-form --> gds-input-wrapper
  gds-input-wrapper --> gds-text
  gds-input-wrapper --> gds-visually-hidden
  style gds-search-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
