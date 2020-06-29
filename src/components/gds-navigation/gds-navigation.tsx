import { Component, h, Host, Prop } from '@stencil/core'

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

  render() {
    return (
      <Host>
        <header class="banner">
          <div class="container">
            <gds-link href={this.homeUrl}>
              <img src={this.logoUrl} />
            </gds-link>

            <nav class="nav-primary">
              <slot name="menu"></slot>
            </nav>

            <div class="extensions">
              <slot name="extensions"></slot>
            </div>
          </div>
        </header>
      </Host>
    )
  }
}
