import { Component, h, Prop } from '@stencil/core'

/**
 * Paragraph element with different sizes.
 */
@Component({
  tag: 'gds-paragraph',
  styleUrl: 'gds-paragraph.scss',
  // Expose the p elements for better SEO.
  shadow: true,
})
export class GdsParagraph {
  /**
   * Size of the text.
   */
  @Prop({ reflect: true }) size: string = 'm'
  /**
   * Use to override p element's style.
   */
  @Prop() class: string

  render() {
    return (
      <p
        class={{
          [this.class]: !!this.class,
        }}>
        <slot></slot>
      </p>
    )
  }
}
