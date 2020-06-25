# gds-media-card

<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description                                                                                                                             | Type     | Default     |
| ---------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `description`          | `description`            |                                                                                                                                         | `string` | `undefined` |
| `headline`             | `headline`               | Title for the card (note: title is a reserved word).                                                                                    | `string` | `undefined` |
| `href`                 | `href`                   | If defined, the card will be a link.                                                                                                    | `string` | `undefined` |
| `imageUrl`             | `image-url`              | Image url.                                                                                                                              | `string` | `undefined` |
| `superimposedImageFit` | `superimposed-image-fit` | Superimposed image fit. TODO: implement this. This probably needs to be outside of gds-card So that the overflowing image won't be cut. | `string` | `undefined` |
| `superimposedImageUrl` | `superimposed-image-url` | Superimposed image url. TODO: implement this.                                                                                           | `string` | `undefined` |
| `target`               | `target`                 | Link open target.                                                                                                                       | `string` | `undefined` |


## Dependencies

### Depends on

- [gds-card](../gds-card)
- [gds-heading](../gds-heading)
- [gds-paragraph](../gds-paragraph)
- [gds-link](../gds-link)

### Graph
```mermaid
graph TD;
  gds-media-card --> gds-card
  gds-media-card --> gds-heading
  gds-media-card --> gds-paragraph
  gds-media-card --> gds-link
  style gds-media-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
