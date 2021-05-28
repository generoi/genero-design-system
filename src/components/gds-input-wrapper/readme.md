# gds-text-button



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                | Type      | Default     |
| ------------------- | --------------------- | ------------------------------------------ | --------- | ----------- |
| `error`             | `error`               | TODO: Add this feature.                    | `string`  | `undefined` |
| `hideLabelVisually` | `hide-label-visually` | Visually hide the label                    | `boolean` | `false`     |
| `label`             | `label`               | Display the label above the input element. | `string`  | `undefined` |


## CSS Custom Properties

| Name                               | Description |
| ---------------------------------- | ----------- |
| `--gds-input-background`           |             |
| `--gds-input-border`               |             |
| `--gds-input-border-focus`         |             |
| `--gds-input-border-radius`        |             |
| `--gds-input-color`                |             |
| `--gds-input-font-family`          |             |
| `--gds-input-font-size`            |             |
| `--gds-input-font-weight`          |             |
| `--gds-input-min-height`           |             |
| `--gds-input-padding`              |             |
| `--gds-input-placeholder-color`    |             |
| `--gds-select-arrow-image`         |             |
| `--gds-select-arrow-padding-right` |             |
| `--gds-select-arrow-position`      |             |
| `--gds-select-arrow-size`          |             |
| `--gds-select-input-padding-right` |             |
| `--gds-textarea-input-resize`      |             |


## Dependencies

### Used by

 - [gds-search-form](../gds-search-form)

### Depends on

- [gds-text](../gds-text)
- [gds-visually-hidden](../gds-visually-hidden)

### Graph
```mermaid
graph TD;
  gds-input-wrapper --> gds-text
  gds-input-wrapper --> gds-visually-hidden
  gds-search-form --> gds-input-wrapper
  style gds-input-wrapper fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
