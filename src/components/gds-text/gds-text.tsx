import { Component, h, Prop } from '@stencil/core'

/**
 * Text element with different sizes.
 */
@Component({
  tag: 'gds-text',
  styleUrl: 'gds-text.scss',
  shadow: true,
})
export class GdsText {
  /**
   * Size of the text.
   */
  @Prop() size: string = 'm'

  render() {
    return (
      <span class={`size-${this.size}`}>
        <slot></slot>
      </span>
    )
  }
}
