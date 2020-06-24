# gds-label

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                               | Type     | Default     |
| ----------------- | ------------------ | ------------------------------------------------------------------------- | -------- | ----------- |
| `backgroundColor` | `background-color` | Tag background color. TODO: Implement the color custom variable scheme.   | `string` | `undefined` |
| `color`           | `color`            | Color for the tag text. TODO: Implement the color custom variable scheme. | `string` | `'white'`   |
| `href`            | `href`             | If defined, the tag will be a link.                                       | `string` | `undefined` |
| `target`          | `target`           | Link open target.                                                         | `string` | `undefined` |


## Dependencies

### Depends on

- [gds-label](../gds-label)
- [gds-link](../gds-link)

### Graph
```mermaid
graph TD;
  gds-tag --> gds-label
  gds-tag --> gds-link
  style gds-tag fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
