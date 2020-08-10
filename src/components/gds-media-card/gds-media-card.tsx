import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'gds-media-card',
  styleUrl: 'gds-media-card.scss',
  shadow: true,
})
export class GdsMediaCard {
  /**
   * If defined, the card will be a link.
   */
  @Prop() href: string
  /**
   * Link open target.
   */
  @Prop() target: string
  /**
   * Title for the card (note: title is a reserved word).
   */
  @Prop() headline: string
  /**
   * Image url.
   */
  @Prop() imageUrl: string
  /**
   * Superimposed image url.
   * TODO: implement this.
   */
  @Prop() superimposedImageUrl: string
  /**
   * Superimposed image fit.
   * TODO: implement this. This probably needs to be outside of gds-card
   * So that the overflowing image won't be cut.
   */
  @Prop() superimposedImageFit: string
  /**
   *
   */
  @Prop() description: string

  render() {
    // Main content
    const card = (
      <gds-card>
        {/* TODO: Implement a gds-image component that implements <picture> and srcset etc. */}
        <img src={this.imageUrl} class="image" />
        <div class="content">
          {this.headline && (
            <div class="headline">
              <gds-heading size="s">{this.headline}</gds-heading>
            </div>
          )}

          {this.description && <gds-paragraph class="description">{this.description}</gds-paragraph>}

          <div class="tags">
            <slot name="tags"></slot>
          </div>

          <slot name="content"></slot>
        </div>
      </gds-card>
    )

    // Render without a link
    if (!this.href) return card

    // Render with a link
    return (
      <gds-link href={this.href} target={this.target}>
        {card}
      </gds-link>
    )
  }
}
