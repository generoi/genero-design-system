import { Component, Prop, h, Host, State } from '@stencil/core'

/**
 * This is an accordion.
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
  @Prop() openOnHover: boolean

  /**
   * Content floats.
   */
  @Prop() contentFloats: boolean = false

  /**
   * Keeps track of when the user has actively collapsed or expanded the accordion.
   */
  @State() expanded: boolean = false

  render() {
    return (
      <Host>
        <div
          class={{
            accordion: true,
            expanded: this.expanded,
            openOnHover: this.openOnHover,
          }}>
          <div class="header" onClick={() => (this.expanded = !this.expanded)}>
            <div class="heading">
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
          </div>
          <div
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
