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
   * TODO: implement this.
   */
  @Prop() superimposedImageFit: string
  /**
   * TODO: implement this.
   */
  @Prop() description: string

  render() {
    console.log('img', this.imageUrl)
    console.log('headline', this.headline)
    // Main content
    const card = (
      <div class="card">
        {/* TODO: Implement a gds-image component that implements <picture> and srcset etc. */}
        <img src={this.imageUrl} class="image" />
        <div class="headline">
          <gds-heading size="s">{this.headline}</gds-heading>
        </div>
        <div class="tags">
          <slot></slot>
        </div>
      </div>
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
