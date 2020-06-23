import { Component, h, Prop } from '@stencil/core'

/**
 * Paragraph element with different sizes.
 */
@Component({
  tag: 'gds-body',
  styleUrl: 'gds-body.scss',
  // Expose the p elements for better SEO.
  shadow: false,
})
export class GdsBody {
  /**
   * Size of the body.
   */
  @Prop() size: string = 'm'

  render() {
    return (
      <p class={`gds-body-${this.size}`}>
        <slot></slot>
      </p>
    )
  }
}
