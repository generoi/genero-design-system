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

  private children: Element[]

  componentWillLoad() {
    this.children = Array.from(this.host.children)
    // Add role="menuitem" to all children that are links
    this.children
      .filter(child => child.tagName === 'A')
      .map(child => {
        child.setAttribute('role', 'menuitem')
      })
  }

  render() {
    return (
      <Host role={this.role}>
        <div class="submenu">
          <slot name="submenu-item"></slot>
        </div>
      </Host>
    )
  }
}
