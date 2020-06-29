import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'gds-menu-item',
  styleUrl: 'gds-menu-item.scss',
  shadow: true,
})
export class GdsMenuItem {
  /**
   * Link url.
   */
  @Prop() href: string

  render() {
    return (
      <li class="item">
        <gds-link href={this.href}>
          <gds-label size="l">
            <slot></slot>
          </gds-label>
        </gds-link>
      </li>
    )
  }
}
