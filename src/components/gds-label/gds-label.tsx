import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'gds-label',
  styleUrl: 'gds-label.scss',
  shadow: true,
})
export class GdsLabel {
  /**
   * Size of the label.
   */
  @Prop() size: string = 'm'
  /**
   * Text color.
   * TODO: Implement the color custom variable scheme.
   */
  @Prop() color: string

  render() {
    return (
      <Host
        style={{
          color: this.color,
        }}>
        <span class={`size-${this.size}`}>
          <slot></slot>
        </span>
      </Host>
    )
  }
}
