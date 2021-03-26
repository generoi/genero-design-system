import { Component, Host, h, Prop, Element } from '@stencil/core'

let idCounter = 0;

/**
 * A wrapper component for input/textarea that handles labels, hints, and errors.
 *
 * Input and textarea are slotted so that these native elements can be used with all of their
 * built-in events and functionality.
 *
 * Inspired by: https://blog.usejournal.com/extending-html-inputs-in-a-framework-agnostic-way-with-web-components-9227532b6139
 */
@Component({
  tag: 'gds-input-wrapper',
  styleUrl: 'gds-input-wrapper.scss',
  shadow: false, // labels cannot be used when input is in a slot
  scoped: true
})
export class GdsInputWrapper {
  @Element() host: HTMLElement

  private inputSlot: HTMLElement
  private inputId: string

  /**
   * Display the label above the input element.
   */
  @Prop() label: string

  /**
   * Visually hide the label
   */
  @Prop() hideLabelVisually: boolean = false

  /**
   * TODO: Add this feature.
   */
  @Prop() error: string

  componentWillLoad() {
    this.inputSlot = this.host.querySelector('[slot="input"]')
    this.inputId = `gds-hint-${++idCounter}`
    this.inputSlot.id = this.inputId
  }

  render() {
    const content = (
      <div class="content">
        <div class="input">
          <slot name="input"></slot>
        </div>
        {this.error ? <div class="error">{this.error}</div> : null}
      </div>
    )

    let label = this.label && (
      <label htmlFor={this.inputId}>
        <gds-text size="s">
          {this.label}
        </gds-text>
      </label>
    )

    return (
      <Host>
        {label && this.hideLabelVisually && (
          <gds-visually-hidden>{label}</gds-visually-hidden>
        ) || (
          label
        )}
        <slot name="hint"></slot>
        {content}
      </Host>
    )
  }
}
