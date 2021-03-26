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
   * Link rel. (can be used for nofollow, sponsored etc.)
   */
  @Prop({ reflect: true }) rel: string
  /**
   * Block element.
   */
  @Prop({ reflect: true }) block: boolean
  /**
   * Block element.
   */
  @Prop({ reflect: true }) ariaLabel: string

  render() {
    return (
      <a href={this.href} target={this.target} rel={this.rel} aria-label={this.ariaLabel}>
        <slot></slot>
      </a>
    )
  }
}
