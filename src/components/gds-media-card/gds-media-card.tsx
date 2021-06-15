import { Component, h, Prop, Watch, Element } from '@stencil/core'

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
  @Element() host: HTMLElement
  private headlineSlot: HTMLSlotElement

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
   * Image sizes.
   */
   @Prop() sizes: string
   /**
   * Image srcset.
   */
  @Prop() srcset: string
  /**
   * Image alt.
   * Defaults to "" representing a decorative image.
   */
  @Prop() imageAlt: string = ''
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

  @Prop() accessibleLabel: string

  @Watch('overlayEffect')
  validateOverlayEffect(newValue: string) {
    if (newValue && !['blur'].includes(newValue)) {
      throw new Error('overlay-effect: invalid effect')
    }
  }

  componentWillLoad() {
    this.headlineSlot = this.host.querySelector(':scope > [slot="headline"]') as HTMLSlotElement

    if (!this.accessibleLabel) {
      this.accessibleLabel = this.headline || this.headlineSlot.textContent.trim()
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
            alt={this.imageAlt}
            aria-hidden="true"
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
            srcset={this.srcset}
            sizes={this.sizes}
            // If there's a superimposed image the background one is purely decorative
            alt={this.superimposedUrl ? '' : this.imageAlt}
            aria-hidden="true"
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
        {this.href && (
          <gds-link href={this.href} target={this.target} full accessible-label={ this.accessibleLabel }>
          </gds-link>
        )}
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

    return mediaCard
  }
}
