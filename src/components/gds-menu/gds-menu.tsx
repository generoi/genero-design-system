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

    // Empty out the inner content and recreate it in the render function using
    // the saved child elements so that we can wrap each in a <li>.
    this.host.innerHTML = ''
  }

  render() {
    return (
      <Host role={this.role}>
        <ul
          class={this.direction}
          role="none"
        >
          { this.children.map(child => {
            return <li role="none" innerHTML={child.outerHTML} />
          } )}
        </ul>
      </Host>
    )
  }
}
