import { Component, h, Listen, State, Element, Host } from '@stencil/core'

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
  @Element() host: HTMLElement

  /**
   * True, if the user has opened the hint.
   */
  @State() open: boolean = false

  private contentId: string
  private contentEl: HTMLElement
  private triggerEl: HTMLElement
  @State() focusTarget: string

  @Listen('click')
  handleClick() {
    if (this.open) {
      this.closeHint()
    } else {
      this.openHint()
    }
  }

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case ' ':
        event.preventDefault()

        if (this.open) {
          this.closeHint(true)
        } else {
          this.openHint(true)
        }
        break
      case 'Escape':
        if (this.open) {
          this.closeHint(true)
        }
        break
    }
  }

  handleDocumentClick(event: MouseEvent) {
    if (!this.open || this.host.contains(event.target as Node)) {
      return
    }
    this.closeHint()
  }

  openHint(setFocus: Boolean = false) {
    this.open = true
    if (setFocus) {
      this.focusTarget = 'content'
    }
  }

  closeHint(setFocus: Boolean = false) {
    this.open = false
    if (setFocus) {
      this.focusTarget = 'trigger'
    }
  }

  componentDidUpdate() {
    switch (this.focusTarget) {
      case 'content':
        this.contentEl.focus({preventScroll: true})
        break;
      case 'trigger':
        this.triggerEl.focus({preventScroll: true})
      }
      this.focusTarget = null
  }

  componentWillLoad() {
    this.contentId = `gds-hint-${++idCounter}`
  }

  connectedCallback() {
    document.addEventListener('mousedown', this.handleDocumentClick.bind(this), false)
  }

  disconnectedCallback() {
    document.removeEventListener('mousedown', this.handleDocumentClick.bind(this), false)
  }


  render() {
    return (
      <Host>
        <button
          class="icon"
          type="button"
          aria-controls={ this.contentId }
          aria-expanded={ this.open ? 'true' : 'false' }
          ref={el => (this.triggerEl = el as HTMLElement)}
        >
          <div class="icon-content" tabindex="-1">
            <slot name="icon"></slot>
          </div>
        </button>
        <div
          id={ this.contentId }
          tabindex="0"
          ref={el => (this.contentEl = el as HTMLElement)}
          class={{
            content: true,
            open: this.open,
          }}>
          <slot name="content"></slot>
        </div>
      </Host>
    )
  }
}
