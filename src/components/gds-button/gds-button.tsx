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
  /**
   * Left side icon with a font.
   * https://www.martinstoeckli.ch/fontmap/fontmap.html
   */
  @Prop() leftIcon: string
  /**
   * Right side icon with a font.
   */
  @Prop() rightIcon: string

  render() {
    return (
      <button
        class={{
          button: !this.text,
          'text-button': this.text,
          [`size-${this.size}`]: true,
        }}
        disabled={this.disabled}>
        {this.leftIcon && <span class="icon">{this.leftIcon}</span>}
        <slot name="left-icon"></slot>
        <span>
          <slot></slot>
        </span>
        {this.rightIcon && <span class="icon">{this.rightIcon}</span>}
        <slot name="right-icon"></slot>
      </button>
    )
  }
}
