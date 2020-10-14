import { Component, h, State } from '@stencil/core'

/**
 * A component for diplaying hints when clicking an icon.
 *
 * TODO: Dynamically position the popup box so that it doesn't overflow the viewport.
 */
@Component({
  tag: 'gds-hint',
  styleUrl: 'gds-hint.scss',
  shadow: true,
})
export class GdsHint {
  /**
   * True, if the user has opened the hint.
   */
  @State() open: boolean = false

  render() {
    return (
      <div class="hint" onClick={() => (this.open = !this.open)}>
        <span class="icon">
          <slot name="icon"></slot>
        </span>
        <div
          class={{
            content: true,
            open: this.open,
          }}>
          <slot name="content"></slot>
        </div>
      </div>
    )
  }
}
