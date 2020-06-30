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
  /**
   * Can be used to divide menu items.
   * TODO: Implement desktop styles.
   */
  @Prop() divider: boolean

  render() {
    if (this.divider) {
      return <div class="divider"></div>
    } else {
      return (
        <li class="item">
          <gds-link href={this.href}>
            <div class="label">
              <gds-label size="l">
                <slot></slot>
              </gds-label>
            </div>
          </gds-link>
        </li>
      )
    }
  }
}
