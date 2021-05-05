import { Component, Prop, h, Host, Listen } from '@stencil/core'

// Global counter for generating unique IDs.
let idCounter = 0

/**
 * This is an accordion.
 * @slot label - the heading part of the accordion
 * @slot icon-collapse
 * @slot icon-expand
 * @slot content - the hidden part of the accordion
 */
@Component({
  tag: 'gds-accordion',
  styleUrl: 'gds-accordion.scss',
  shadow: true,
})
export class GdsAccordion {
  /**
   * Opens automatically when hovered (desktop only).
   */
  @Prop() openOnHover: boolean = false

  /**
   * Content floats.
   */
  @Prop() contentFloats: boolean = false

  /**
   * Keeps track of when the user has actively collapsed or expanded the accordion.
   */
  @Prop({
    reflect: true,
    mutable: true,
  })
  expanded: boolean = false

  /**
   * HTML IDs
   */
  private contentId: string
  private titleId: string

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape':
        if (this.expanded) {
          this.expanded = false
        }
        break
    }
  }

  componentWillLoad() {
    ++idCounter
    this.contentId = `gds-accordion-content-${idCounter}`
    this.titleId = `gds-accordion-title-${idCounter}`
  }

  render() {
    return (
      <Host>
        <div
          class={{
            accordion: true,
            expanded: this.expanded,
            openOnHover: this.openOnHover,
          }}>
          <button
            class="header" onClick={() => (this.expanded = !this.expanded)}
            aria-controls={ this.contentId }
            aria-expanded={ this.expanded ? 'true' : 'false' }
          >
            <div class="heading" id={ this.titleId }>
              <slot name="label"></slot>
            </div>
            <div class="iconCollapse">
              <slot name="icon-collapse">
                {/* TODO: Once gds-icon can render inside shadow dom, then use these defaults. */}
                {/* <gds-icon name="caret-circle-up" regular></gds-icon> */}
              </slot>
            </div>
            <div class="iconExpand">
              <slot name="icon-expand">{/* <gds-icon name="caret-circle-down" regular></gds-icon> */}</slot>
            </div>
          </button>
          <div
            id={ this.contentId }
            aria-labelledby={ this.titleId }
            role="region"
            class={{
              content: true,
              contentFloats: this.contentFloats,
            }}>
            <slot name="content"></slot>
          </div>
        </div>
      </Host>
    )
  }
}
