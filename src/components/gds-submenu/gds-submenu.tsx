import { Component, h, Host, Element, Prop, Listen, Event, EventEmitter } from '@stencil/core'

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
   */
  @Prop() role: string

  @Event() close: EventEmitter<HTMLElement>;

  @Listen('keydown')
  handleKeydown(e: KeyboardEvent) {
    switch (e.key) {
      case 'Tab':
        break;
      case 'Escape':
        this.close.emit(this.host)
        break
    }
  }

  /**
   * Collapse when focus moves out of submenu
   */
  @Listen('focusout')
  handleBlur(e: FocusEvent) {
    const newFocusElement = e.relatedTarget
    if (!(newFocusElement instanceof HTMLElement)) {
      return;
    }

    if (!this.host.contains(newFocusElement)) {
      this.close.emit(this.host);
    }
  }

  /**
   * Add role="menuitem" to all children that are links
   */
  private markMenuItems(): void {
    Array.from(this.host.children)
      .filter(child => child.tagName === 'A')
      .map(child => child.setAttribute('role', 'menuitem'))
  }

  componentWillLoad() {
    if (this.role === 'menu') {
      this.markMenuItems();
    }
  }

  render() {
    return (
      <Host role={this.role}>
        <slot name="submenu-item"></slot>
      </Host>
    )
  }
}
