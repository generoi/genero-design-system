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

  private children: Element[];

  componentWillLoad() {
    this.children = Array.from(this.host.children)
    this.children
      .filter(child => child.tagName === 'A')
      .map(child => child.setAttribute('role', 'menuitem'))
  }

  render() {
    return (
      <Host role={this.role}>
        <div class={{
          menu: true,
          [this.direction]: true,
        }}>
          <slot name="item"></slot>
        </div>
      </Host>
    )
  }
}
