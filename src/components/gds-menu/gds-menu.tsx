import { Component, Element, h, Prop, Host } from '@stencil/core'

/**
 * This component can be used in on a webpage direct with good SEO since anchors are rendered outside of the component.
 */
@Component({
  tag: 'gds-menu',
  styleUrl: 'gds-menu.scss',
  shadow: true,
})
export class GdsMenu {
  @Element() host: HTMLElement

  /**
   * Direction: "horizontal" or "vertial".
   * Defaults to "vertical".
   */
  @Prop() direction: string

  /**
   * Aria role
   * Defaults to "menu".
   */
  @Prop() role: string = 'menu'

  componentWillLoad() {
    Array.from(this.host.children)
      .filter(child => child.tagName === 'A')
      .map(child => child.setAttribute('role', 'menuitem'))
  }

  render() {
    return (
      <Host
        role={this.role}
        class={this.direction}>
          <slot name="item"></slot>
      </Host>
    )
  }
}
