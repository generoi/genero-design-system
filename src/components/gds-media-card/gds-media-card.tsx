import { Component, h, Prop } from '@stencil/core'

/**
 * Media Card component.
 *
 * TODO: Implement a gds-image component that implements <picture> and srcset etc.
 */
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
   * superimpose image url.
   */
  @Prop() superimposeUrl: string
  /**
   * superimpose image overflow amount in pixels.
   */
  @Prop() superimposeTop: string
  @Prop() superimposeBottom: string
  @Prop() superimposeLeft: string
  @Prop() superimposeRight: string
  /**
   *
   */
  @Prop() description: string

  render() {
    // Main card
    const card = (
      <gds-card>
        <div
          class="media"
          style={{
            marginBottom: this.superimposeBottom && `${this.superimposeBottom}px`,
          }}>
          <img src={this.imageUrl} class="image" />
        </div>
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

    // Optional superimposed image.
    // Note: Superimpose needs to be outside of card because it has overflow hidden.
    const superimpose = this.superimposeUrl && (
      <div class="superimpose">
        <div
          class="superimpose-image"
          style={{
            top: this.superimposeTop && `-${this.superimposeTop}px`,
            bottom: this.superimposeBottom && `-${this.superimposeBottom}px`,
            left: this.superimposeLeft && `-${this.superimposeLeft}px`,
            right: this.superimposeRight && `-${this.superimposeRight}px`,
          }}>
          <img src={this.superimposeUrl} />
        </div>
      </div>
    )

    // Container for card and superimpose image
    const mediaCard = (
      <div
        class="media-card"
        style={{
          paddingTop: this.superimposeTop && `${this.superimposeTop}px`,
        }}>
        {superimpose}
        {card}
      </div>
    )

    // Render without a link
    if (!this.href) return mediaCard

    // Render with a link
    return (
      <gds-link href={this.href} target={this.target}>
        {mediaCard}
      </gds-link>
    )
  }
}
