import { Component, h, Prop, Watch } from '@stencil/core'

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
  @Prop() superimposedUrl: string
  /**
   * superimpose image overflow amount in pixels.
   */
  @Prop() superimposedTop: string
  @Prop() superimposedBottom: string
  @Prop() superimposedLeft: string
  @Prop() superimposedRight: string
  /**
   * Overlay.
   */
  @Prop() overlay: boolean
  /**
   * Overlay effect.
   */
  @Prop() overlayEffect: string
  /**
   *
   */
  @Prop() description: string

  @Watch('overlayEffect')
  validateOverlayEffect(newValue: string) {
    if (newValue && !['blur'].includes(newValue)) {
      throw new Error('overlay-effect: invalid effect')
    }
  }

  render() {
    // Main card
    const card = (
      <gds-card>
        <div
          class="media"
          style={{
            marginBottom: this.superimposedBottom && `${this.superimposedBottom}px`,
          }}>
          <img
            src={this.imageUrl}
            class={['image', this.overlayEffect ? `has-${this.overlayEffect}-effect` : ''].filter(Boolean).join(' ')}
          />
          {this.overlay && <div class="overlay" />}
        </div>
        <div class="content">
          <slot name="headline">
            {this.headline && (
              <gds-heading size="s" class="headline">
                {this.headline}
              </gds-heading>
            )}
          </slot>

          <slot name="description">
            {this.description && (
              <gds-paragraph size="l" class="description">
                {this.description}
              </gds-paragraph>
            )}
          </slot>

          <slot name="tags"></slot>

          <slot name="content"></slot>
        </div>
      </gds-card>
    )

    // Optional superimposed image.
    // Note: Superimpose needs to be outside of card because it has overflow hidden.
    const superimposed = this.superimposedUrl && (
      <div class="superimposed">
        <div
          class="superimposed-image"
          style={{
            top: this.superimposedTop && `-${this.superimposedTop}px`,
            bottom: this.superimposedBottom && `-${this.superimposedBottom}px`,
            left: this.superimposedLeft && `-${this.superimposedLeft}px`,
            right: this.superimposedRight && `-${this.superimposedRight}px`,
          }}>
          <img src={this.superimposedUrl} />
        </div>
      </div>
    )

    // Container for card and superimpose image
    const mediaCard = (
      <div
        class="media-card"
        style={{
          paddingTop: this.superimposedTop && `${this.superimposedTop}px`,
        }}>
        {superimposed}
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
