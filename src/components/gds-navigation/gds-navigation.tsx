import { Component, h, Host, Prop, State } from '@stencil/core'

@Component({
  tag: 'gds-navigation',
  styleUrl: 'gds-navigation.scss',
  shadow: true,
})
export class GdsNavigation {
  /**
   * Site url.
   */
  @Prop() homeUrl: string
  /**
   * Site logo image url.
   */
  @Prop() logoUrl: string
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

    // Extensions are rendered in two places so that this would work with css breakpoints.
    const extensions = (
      <div class="extensions">
        <slot name="extensions"></slot>
      </div>
    )

    return (
      <Host>
        <header>
          <div class="container">
            <gds-link href={this.homeUrl}>
              <div class="logo">
                <img src={this.logoUrl} />
              </div>
            </gds-link>

            <div class="content" ref={el => (this.content = el)}>
              <nav class="nav-primary">
                <slot name="menu"></slot>
              </nav>

              {this.open === true && extensions}
            </div>

            {this.open === undefined && extensions}

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
