import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'gds-label',
  styleUrl: 'gds-label.scss',
  shadow: true,
})
export class GdsLabel {
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
        <slot></slot>
      </Host>
    )
  }
}
