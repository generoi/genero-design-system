import { Component, h, Host } from '@stencil/core'

/**
 * A card that renders content in a container that has
 * white background and border shadows. Comes without padding by default.
 */
@Component({
  tag: 'gds-card',
  styleUrl: 'gds-card.scss',
  shadow: true,
})
export class GdsCard {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
