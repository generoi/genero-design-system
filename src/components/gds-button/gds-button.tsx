import { Component, Prop, h, Host } from '@stencil/core'

/**
 * This is a button with optional left and right icons.
 * NOTE: Should we have a separate button like anchor link component?
 */
@Component({
  tag: 'gds-button',
  styleUrl: 'gds-button.scss',
  shadow: true,
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
  /**
   *
   */
  @Prop() rightIconRotate: number
  /**
   *
   */
  @Prop() leftIconRotate: number

  render() {
    // This ugly syntax is because of prettier. TODO: Fix this syntax.
    const rightIconStyle = this.rightIconRotate
      ? {
          transform: `rotate(${this.rightIconRotate}deg)`,
        }
      : undefined

    const leftIconStyle = this.leftIconRotate
      ? {
          transform: `rotate(${this.leftIconRotate}deg)`,
        }
      : undefined

    return (
      <Host>
        <button
          class={{
            button: !this.text,
            'text-button': this.text,
            [`size-${this.size}`]: true,
          }}
          disabled={this.disabled}>
          {this.leftIcon && <span style={leftIconStyle}>{this.leftIcon}</span>}
          <span>
            <slot></slot>
          </span>
          {this.rightIcon && <span style={rightIconStyle}>{this.rightIcon}</span>}
        </button>
      </Host>
    )
  }
}
