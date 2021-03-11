import { Component, h, Host } from '@stencil/core'

/**
 * This component can be used in on a webpage direct with good SEO since anchors are rendered outside of the component.
 */
@Component({
  tag: 'gds-submenu',
  styleUrl: 'gds-submenu.scss',
  shadow: true,
})
export class GdsSubmenu {
  render() {
    return (
      <Host>
        <ul>
          <slot name="submenu-item"></slot>
        </ul>
      </Host>
    )
  }
}
