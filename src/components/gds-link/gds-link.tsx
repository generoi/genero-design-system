import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'gds-link',
  styleUrl: 'gds-link.scss',
  // Use Light DOM so that Google bot can see important element without JS.
  shadow: false,
  scoped: true,
})
export class GdsLink {
  /**
   * Link url.
   */
  @Prop({ reflect: true }) href: string
  /**
   * Link open target.
   */
  @Prop() target: string
  /**
   * Block element.
   */
  @Prop({ reflect: true }) block: boolean

  render() {
    return (
      <a href={this.href} target={this.target}>
        <slot></slot>
      </a>
    )
  }
}
