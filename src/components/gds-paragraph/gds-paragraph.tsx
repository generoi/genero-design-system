import { Component, h, Prop } from '@stencil/core'

/**
 * Paragraph element with different sizes.
 */
@Component({
  tag: 'gds-paragraph',
  styleUrl: 'gds-paragraph.scss',
  // Expose the p elements for better SEO.
  shadow: false,
})
export class GdsParagraph {
  /**
   * Size of the text.
   */
  @Prop() size: string = 'm'

  render() {
    return (
      <p class={`gds-paragraph-${this.size}`}>
        <slot></slot>
      </p>
    )
  }
}
