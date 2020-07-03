import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'gds-menu-item',
  styleUrl: 'gds-menu-item.scss',
  shadow: true,
})
export class GdsMenuItem {
  /**
   * Is menu item appear active.
   */
  @Prop({ reflect: true }) active: boolean

  render() {
    return (
      <li
        class={{
          item: true,
          active: this.active,
        }}>
        <div class="content">
          <gds-label size="l">
            <slot></slot>
          </gds-label>
          {this.active && (
            <div class="underline-container">
              <div class="underline"></div>
            </div>
          )}
        </div>
      </li>
    )
  }
}
