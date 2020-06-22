import { Component, h, Host } from '@stencil/core'

@Component({
  tag: 'gds-logo-grid',
  styleUrl: 'gds-logo-grid.scss',
  shadow: true,
})
export class GdsLogoGrid {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
