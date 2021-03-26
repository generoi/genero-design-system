import { Component, Host, h, Prop, Element } from '@stencil/core'

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
  shadow: true,
})
export class GdsInputWrapper {
  @Element() host: HTMLElement

  private inputSlot: HTMLElement

  /**
   * Display the label above the input element.
   */
  @Prop() label: string
  /**
   * TODO: Add this feature.
   */
  @Prop() error: string

  componentWillLoad() {
    this.inputSlot = this.host.querySelector('[slot="input"]')
    this.inputSlot.setAttribute('aria-label', this.label)
  }

  private focusInput() {
    this.inputSlot.focus();
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

    return (
      <Host>
        { this.label && (
          <gds-text onClick={() => this.focusInput()} size="s" aria-hidden="true">
            {this.label}
          </gds-text>
        ) }
        <slot name="hint"></slot>
        {content}
      </Host>
    )
  }
}
