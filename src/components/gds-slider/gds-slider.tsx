import { Component, h, Prop, Event, EventEmitter, Host } from '@stencil/core'

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
  @Prop() min: number
  @Prop() max: number
  @Prop() value: number

  @Event({ eventName: 'value-changed' }) valueChanged: EventEmitter<any>

  valueChangedHandler(event: any) {
    this.valueChanged.emit(event.target.value)
  }

  render() {
    return (
      <Host>
        <input
          type="range"
          min={this.min}
          max={this.max}
          value={this.value}
          class="slider"
          onChange={(event) => this.valueChangedHandler(event)}
        />
      </Host>
    )
  }
}
