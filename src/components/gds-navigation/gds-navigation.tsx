import { Component, h, Host, State } from '@stencil/core'

/**
 * gds-navigation takes 4 slots: logo, menu, mobile-extensions, and desktop-extensions.
 * This component can be used in on a webpage direct with good SEO since anchors are rendered outside of the component.
 */
@Component({
  tag: 'gds-navigation',
  styleUrl: 'gds-navigation.scss',
  // We want to use Light DOM so that the elements the the slots are easier to style.
  shadow: false,
})
export class GdsNavigation {
  /**
   * Mobile menu icon.
   */
  @State() menuIcon: string = '☰'
  /**
   *
   */
  @State() open: boolean
  /**
   * Content element that get's hidden in mobile menu.
   */
  private content: HTMLElement

  render() {
    // Toggle manu open (mobile only).
    const onHamburgerClick = () => {
      var style = window.getComputedStyle(this.content)
      if (style.display === 'none') {
        this.content.style.display = 'block'
        this.menuIcon = '✕'
        this.open = true
      } else {
        this.content.style.display = 'none'
        this.menuIcon = '☰'
        this.open = false
      }
    }

    return (
      <Host>
        <header>
          <div class="container">
            <div class="logo">
              <slot name="logo"></slot>
            </div>

            <div class="content" ref={el => (this.content = el)}>
              <nav class="nav-primary">
                <slot name="menu"></slot>
              </nav>

              <div class="mobile-extensions">
                <slot name="mobile-extensions"></slot>
              </div>
            </div>

            <div class="desktop-extensions">
              <slot name="desktop-extensions"></slot>
            </div>

            <div class="hamburger">
              <gds-button size="l" text onClick={onHamburgerClick}>
                {this.menuIcon}
              </gds-button>
            </div>
          </div>
        </header>
      </Host>
    )
  }
}
