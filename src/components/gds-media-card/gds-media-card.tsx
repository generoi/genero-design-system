import { Component, h, Prop, Watch } from '@stencil/core'

const isNumeric = x => !isNaN(x) && isFinite(x)

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
  @Prop() superimposedTop: number
  @Prop() superimposedBottom: number
  @Prop() superimposedLeft: number
  @Prop() superimposedRight: number
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
    const objectFitX =
      isNumeric(this.superimposedLeft) && isNumeric(this.superimposedRight)
        ? 'center'
        : isNumeric(this.superimposedLeft)
        ? 'left'
        : isNumeric(this.superimposedRight)
        ? 'right'
        : 'center'

    const objectFitY =
      isNumeric(this.superimposedTop) && isNumeric(this.superimposedBottom)
        ? 'center'
        : isNumeric(this.superimposedTop)
        ? 'top'
        : isNumeric(this.superimposedBottom)
        ? 'bottom'
        : 'center'

    // Optional superimposed image.
    // Note: Superimpose needs to be outside of card because it has overflow hidden.
    const superimposed = this.superimposedUrl && (
      <div class="superimposed">
        <div class="superimposed-image">
          <img
            src={this.superimposedUrl}
            style={{
              'object-position': `${objectFitY} ${objectFitX}`,
            }}
          />
        </div>
      </div>
    )

    // Main card
    const card = (
      <gds-card>
        {superimposed}
        <div
          class={{
            media: true,
            'has-overlay': this.overlay,
          }}>
          <img
            src={this.imageUrl}
            class={{
              image: true,
              [`has-${this.overlayEffect}-effect`]: !!this.overlayEffect,
            }}
          />
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

    // Container for card
    const mediaCard = (
      <div
        class="media-card"
        style={{
          '--superimposed-top': this.superimposedTop ? `${this.superimposedTop}px` : '0px',
          '--superimposed-bottom': this.superimposedBottom ? `${this.superimposedBottom}px` : '0px',
          '--superimposed-left': this.superimposedLeft ? `${this.superimposedLeft}px` : '0px',
          '--superimposed-right': this.superimposedRight ? `${this.superimposedRight}px` : '0px',
        }}>
        {card}
      </div>
    )

    // Render without a link
    if (!this.href) return mediaCard

    // Render with a link
    return (
      <gds-link href={this.href} target={this.target} block>
        {mediaCard}
      </gds-link>
    )
  }
}
