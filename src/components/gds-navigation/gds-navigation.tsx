import { Component, h, Host, State, Element, Prop } from '@stencil/core'
import { HTMLStencilElement, Method } from '@stencil/core/internal'

/**
 * gds-navigation takes 4 slots: logo, menu, mobile-extensions, and desktop-extensions.
 * This component can be used in on a webpage direct with good SEO since anchors are rendered outside of the component.
 */
@Component({
  tag: 'gds-navigation',
  styleUrl: 'gds-navigation.scss',
  // We want to use Light DOM so that the elements in the slots are easier to style.
  shadow: false,
  // No need for scoping because css classes are prefixed.
  scoped: false,
})
export class GdsNavigation {
  /**
   * Accessible label for the inner navigation
   */
  @Prop() accessibleNavigationLabel: string
  /**
   * Mobile menu icon. Can be overridden by slots (menu-icon, close-menu-icon).
   */
  @State() menuIcon: string = '☰'
  /**
   * True if the mobile menu is open.
   */
  @State() open: boolean = false
  /**
   * Content element that gets hidden in mobile menu.
   */
  private content: HTMLElement

  /**
   * Used to hide slots if they are empty:
   * https://stackoverflow.com/questions/56092693/stenciljs-check-if-named-slot-is-empty
   */
  @Element() hostElement: HTMLStencilElement

  hasMenuIconSlot: boolean
  hasMobileExtensionsSlot: boolean
  hasDesktopExtensionsSlot: boolean

  componentWillRender() {
    this.hasMenuIconSlot = !!this.hostElement.querySelector('[slot="menu-icon"]')
    this.hasMobileExtensionsSlot = !!this.hostElement.querySelector('[slot="mobile-extensions"]')
    this.hasDesktopExtensionsSlot = !!this.hostElement.querySelector('[slot="desktop-extensions"]')
  }

  closeHamburgerMenu() {
    this.content.style.display = 'none'
    this.menuIcon = '☰'
    this.open = false
  }

  openHamburgerMenu() {
    this.content.style.display = 'block'
    this.menuIcon = '✕'
    this.open = true
  }

  render() {
    // Toggle manu open (mobile only).
    const onHamburgerClick = () => {
      var style = window.getComputedStyle(this.content)
      if (style.display === 'none') {
        this.openHamburgerMenu()
      } else {
        this.closeHamburgerMenu()
      }
    }

    return (
      <Host>
        <header
          class={{
            'gds-navigation-header': true,
            open: this.open,
            close: !this.open,
          }}>
          <div class="gds-navigation-container">
            <div class="gds-navigation-logo">
              <slot name="logo"></slot>
            </div>

            <div class="gds-navigation-content" ref={el => (this.content = el)}>
              <nav class="gds-navigation-nav" aria-label={this.accessibleNavigationLabel}>
                <slot name="menu"></slot>
              </nav>

              {this.hasMobileExtensionsSlot && (
                <div class="gds-navigation-mobile-extensions">
                  <slot name="mobile-extensions"></slot>
                </div>
              )}
            </div>

            {this.hasDesktopExtensionsSlot && (
              <div class="gds-navigation-desktop-extensions">
                <slot name="desktop-extensions"></slot>
              </div>
            )}

            <div class="gds-navigation-hamburger" onClick={onHamburgerClick}>
              <slot name="menu-icon"></slot>
              <slot name="close-menu-icon"></slot>

              {!this.hasMenuIconSlot && <gds-text-button size="l">{this.menuIcon}</gds-text-button>}
            </div>
          </div>
        </header>
      </Host>
    )
  }

  @Method()
  async closeMenu() {
    this.closeHamburgerMenu()
  }
}
