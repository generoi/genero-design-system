import { Component, h, Host, State, Element, Prop } from '@stencil/core'
import { HTMLStencilElement, Listen, Method } from '@stencil/core/internal'

let idCounter = 0;

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
   * Accessible name for the inner navigation
   */
  @Prop() accessibleNavigationLabel: string
  /**
   * Accessible label for the hamburger menu
   */
  @Prop() accessibleHamburgerLabel: string
  /**
   * Mobile menu icon. Can be overridden by slots (menu-icon, close-menu-icon).
   */
  @State() menuIcon: string
  /**
   * True if the mobile menu is open.
   */
  @State() open: boolean = false

  private contentId: string
  private contentEl: HTMLDivElement
  private hamburgerEl: HTMLButtonElement

  /**
   * Used to hide slots if they are empty:
   * https://stackoverflow.com/questions/56092693/stenciljs-check-if-named-slot-is-empty
   */
  @Element() hostElement: HTMLStencilElement

  hasMenuIconSlot: boolean
  hasMobileExtensionsSlot: boolean
  hasDesktopExtensionsSlot: boolean
  hasSearchSlot: boolean

  @Listen('keyup')
  handleKeyup(event: KeyboardEvent) {
    if (!this.open) {
      return
    }

    switch (event.key) {
      case 'Escape':
        this.closeHamburgerMenu()
        this.hamburgerEl.focus();
        break
      case 'Tab':
        if (!this.contentEl.contains(event.target as Node)) {
          this.closeHamburgerMenu()
        }
        break
    }
  }

  componentWillRender() {
    this.hasMenuIconSlot = !!this.hostElement.querySelector('[slot="menu-icon"]')
    this.hasMobileExtensionsSlot = !!this.hostElement.querySelector('[slot="mobile-extensions"]')
    this.hasDesktopExtensionsSlot = !!this.hostElement.querySelector('[slot="desktop-extensions"]')
    this.hasSearchSlot = !!this.hostElement.querySelector('[slot="search"]')
  }

  componentWillLoad() {
    ++idCounter;
    this.contentId = `gds-navigation-content-${idCounter}`
  }

  closeHamburgerMenu() {
    this.open = false
  }

  openHamburgerMenu() {
    this.open = true
  }

  private handleHamburgerClick() {
    if (this.open) {
      this.closeHamburgerMenu()
    } else {
      this.openHamburgerMenu()
    }
  }

  render() {
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

            <button
              class="gds-navigation-hamburger"
              onClick={() => this.handleHamburgerClick()}
              aria-controls={this.contentId}
              aria-expanded={this.open ? 'true' : 'false'}
              aria-label={this.accessibleHamburgerLabel}
              ref={el => (this.hamburgerEl = el as HTMLButtonElement)}
            >
              <slot name="menu-icon"></slot>
              <slot name="close-menu-icon"></slot>

              {!this.hasMenuIconSlot && (
                this.menuIcon ? this.menuIcon : <gds-hamburger active={this.open} />
              )}
            </button>

            <div
              id={this.contentId}
              ref={el => (this.contentEl = el as HTMLDivElement)}
              class={{
                'gds-navigation-content': true,
                open: this.open
              }}
            >
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

            {this.hasSearchSlot && (
              <div class="gds-navigation-search">
                <slot name="search"></slot>
              </div>
            )}
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
