import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'gds-button',
  styleUrl: 'gds-button.scss',
  shadow: false,
})
export class GdsButton {
  /**
   *
   */
  @Prop({ reflect: true }) disabled: boolean = false
  /**
   * Is a textual button.
   */
  @Prop() text: boolean = false
  /**
   * Button size.
   */
  @Prop() size: string = 'm'

  render() {
    return (
      <button
        class={{
          'gds-button': !this.text,
          'gds-text-button': this.text,
          [`gds-button-${this.size}`]: true,
        }}
        disabled={this.disabled}>
        <slot></slot>
      </button>
    )
  }
}
