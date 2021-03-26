import { Component, h, State } from '@stencil/core'

let idCounter = 0

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

  private contentId: string

  componentWillLoad() {
    this.contentId = `gds-hint-${++idCounter}`
  }

  render() {
    return (
      <div class="hint" onClick={() => (this.open = !this.open)}>
        <button
          class="icon"
          aria-describedby={ this.contentId }
        >
          <slot name="icon"></slot>
        </button>
        <div
          id={ this.contentId }
          aria-hidden={ this.open ? 'false' : 'true' }
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
