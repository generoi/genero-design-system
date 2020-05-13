import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'gds-button',
  styleUrl: 'gds-button.scss',
  shadow: true,
})
export class GdsButton {
  @Prop({ reflect: true }) disabled: boolean = false

  render() {
    return (
      <button class="gds-button" disabled={this.disabled}>
        <slot></slot>
      </button>
    )
  }
}
