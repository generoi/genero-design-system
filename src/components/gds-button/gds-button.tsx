import { Component, Prop, h, Host, Element } from '@stencil/core'
import { HTMLStencilElement } from '@stencil/core/internal'

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

  /**
   * Used to hide icon slots if they are empty:
   * https://stackoverflow.com/questions/56092693/stenciljs-check-if-named-slot-is-empty
   */
  @Element() hostElement: HTMLStencilElement
  hasLeftIconSlot: boolean
  hasRightIconSlot: boolean

  componentWillRender() {
    this.hasLeftIconSlot = !!this.hostElement.querySelector('[slot="left-icon"]')
    this.hasRightIconSlot = !!this.hostElement.querySelector('[slot="right-icon"]')
  }

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
          {(this.hasLeftIconSlot || this.leftIcon) && (
            <slot name="left-icon">{this.leftIcon && <span>{this.leftIcon}</span>}</slot>
          )}
          <span>
            <slot></slot>
          </span>
          {(this.hasRightIconSlot || this.rightIcon) && (
            <slot name="right-icon">{this.rightIcon && <span>{this.rightIcon}</span>}</slot>
          )}
        </button>
      </Host>
    )
  }
}
