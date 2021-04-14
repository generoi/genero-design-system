import { Component, h, Prop, Event, EventEmitter, Host, Element, State, Listen } from '@stencil/core'

/**
 * Simple slider that tries to look the same across different browsers.
 *
 * TODO: Add tickmars once there is proper support with custom appearance.
 */
@Component({
  tag: 'gds-slider',
  styleUrl: 'gds-slider.scss',
  shadow: true,
})
export class GdsSlider {
  @Element() host: HTMLElement

  @State() inputAttributes: Object = {}

  @Prop() min: number
  @Prop() max: number
  @Prop() value: number
  @Prop() accessibleLabel: string

  private inputElement: HTMLInputElement

  @Event({ eventName: 'value-changed' }) valueChanged: EventEmitter<any>

  /**
   * Delegate focus to the inner <input> element
   */
  @Listen('focus')
  handleFocus() {
    this.inputElement.focus()
  }

  valueChangedHandler(event: any) {
    this.valueChanged.emit(event.target.value)
  }

  componentWillLoad() {
    // Delegate aria-label to input field.
    this.inputAttributes['ariaLabel'] = this.accessibleLabel
  }

  render() {

    return (
      <Host tabindex="0">
        <input
          type="range"
          min={this.min}
          max={this.max}
          value={this.value}
          class="slider"
          ref={el => this.inputElement = el as HTMLInputElement}
          {...this.inputAttributes}
          onChange={event => this.valueChangedHandler(event)}
        />
      </Host>
    )
  }
}
