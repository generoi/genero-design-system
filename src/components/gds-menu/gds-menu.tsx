import { Component, h, Prop } from '@stencil/core'

/**
 * This component can be used in on a webpage direct with good SEO since anchors are rendered outside of the component.
 */
@Component({
  tag: 'gds-menu',
  styleUrl: 'gds-menu.scss',
  shadow: true,
})
export class GdsMenu {
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
