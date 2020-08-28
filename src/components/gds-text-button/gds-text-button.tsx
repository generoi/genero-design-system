import { Component, Prop, h, Host } from '@stencil/core'

/**
 * This is a button with optional left and right icons.
 * NOTE: Should we have a separate button like anchor link component?
 */
@Component({
  tag: 'gds-text-button',
  styleUrl: 'gds-text-button.scss',
  shadow: true,
})
export class GdsTextButton {
  /**
   *
   */
  @Prop({ reflect: true }) disabled: boolean = false
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
    const iconStyleVariables = {}

    if (this.leftIconRotate) {
      iconStyleVariables['--left-icon-rotate'] = `rotate(${this.leftIconRotate}deg)`
    }

    if (this.rightIconRotate) {
      iconStyleVariables['--right-icon-rotate'] = `rotate(${this.rightIconRotate}deg)`
    }

    return (
      <Host>
        <button class={`button size-${this.size}`} disabled={this.disabled} style={iconStyleVariables}>
          <slot name="left-icon">{this.leftIcon && <span>{this.leftIcon}</span>}</slot>
          <span>
            <slot></slot>
          </span>
          <slot name="right-icon">{this.rightIcon && <span>{this.rightIcon}</span>}</slot>
        </button>
      </Host>
    )
  }
}
