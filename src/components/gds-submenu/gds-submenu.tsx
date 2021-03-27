import { Component, h, Host, Element, Prop } from '@stencil/core'

/**
 * This component can be used in on a webpage direct with good SEO since anchors are rendered outside of the component.
 */
@Component({
  tag: 'gds-submenu',
  styleUrl: 'gds-submenu.scss',
  shadow: true,
})
export class GdsSubmenu {
  @Element() host: HTMLElement

  /**
   * Aria role
   * Defaults to "menu".
   */
  @Prop() role: string = 'menu'

  componentWillLoad() {
    // Add role="menuitem" to all children that are links
    Array.from(this.host.children)
      .filter(child => child.tagName === 'A')
      .map(child => child.setAttribute('role', 'menuitem'))
  }

  render() {
    return (
      <Host role={this.role}>
        <slot name="submenu-item"></slot>
      </Host>
    )
  }
}
