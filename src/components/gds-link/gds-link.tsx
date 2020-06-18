import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'gds-link',
  styleUrl: 'gds-link.scss',
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

  render() {
    return (
      <a class="gds-link" href={this.href} target={this.target}>
        <slot></slot>
      </a>
    )
  }
}
