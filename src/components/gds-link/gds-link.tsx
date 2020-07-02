import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'gds-link',
  styleUrl: 'gds-link.scss',
  // Use Light DOM so that Google bot can see important element without JS.
  shadow: false,
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
   *
   */
  @Prop() block: boolean

  render() {
    return (
      <a
        class={{
          block: this.block,
        }}
        href={this.href}
        target={this.target}>
        <slot></slot>
      </a>
    )
  }
}
