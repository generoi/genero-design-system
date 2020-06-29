import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'gds-menu',
  styleUrl: 'gds-menu.scss',
  shadow: true,
})
export class GdsMenu {
  /**
   * Site url.
   */
  @Prop() homeUrl: string
  /**
   * Direction: "horizontal" or "vertial".
   * Defaults to "vertical".
   */
  @Prop() direction: string

  render() {
    return (
      <ul class={this.direction}>
        <slot name="item"></slot>
      </ul>
    )
  }
}
