import { Component, h, Host, Listen, Prop, Element } from '@stencil/core'

// Global counter to generate unique IDs.
let idCounter = 0

@Component({
  tag: 'gds-menu-item-nested',
  styleUrl: 'gds-menu-item-nested.scss',
  shadow: true,
})
export class GdsMenuItemNested {
  @Element() host: HTMLElement
  private linkSlot: HTMLElement

  /**
   * Is menu item appear active.
   */
  @Prop({ reflect: true }) active: boolean

  /**
   * Submenu icon.
   */
  @Prop({ reflect: true }) submenuIcon: string

  /**
   * Keeps track of when the user has actively collapsed or expanded the submenu.
   */
  @Prop({
    reflect: true,
    mutable: true,
  })
  expanded: boolean = false

  /**
   * Accessible label of the submenu.
   * Defaults to textContent of the link slot.
   */
  @Prop() accessibleLabel: string

  /**
   * HTML ID for the submenu used by aria attributes.
   */
  private submenuId: string

  /**
   * Expand on mouse enter.
   */
  @Listen('mouseenter')
  handleEnter() {
    // Skip this event on mobile devices.
    if (window.innerWidth <= 1024) return

     if (!this.expanded) {
       this.expanded = true
       this.active = true
     }
   }

  /**
   * Collapse on mouse leave.
   */
  @Listen('mouseleave')
  handleLeave() {
    // Skip this event on mobile devices.
    if (window.innerWidth <= 1024) return

    if (this.expanded) {
       this.expanded = false
       this.active = false
     }
   }

  /**
   * Toggle submenu visibility by clicking the chevron icon.
   */
   private handleToggleSubmenuClick(event: MouseEvent) {
    event.preventDefault()
    event.stopPropagation()
    this.expanded = !this.expanded
  }

  componentWillLoad() {
    this.submenuId = `gds-menu-item-nested-${++idCounter}`
    this.linkSlot = this.host.querySelector(':scope > [slot="link"]')
    this.linkSlot.setAttribute('role', 'menuitem')
    this.linkSlot.setAttribute('aria-haspopup', 'true')

    if (!this.accessibleLabel) {
      this.accessibleLabel = this.linkSlot.textContent.trim()
    }
  }

  render() {
    this.linkSlot.setAttribute('aria-expanded', this.expanded ? 'true' : 'false')

    return (
      <Host>
        <div class="menu-item">
          <slot name="link"></slot>

          {this.submenuIcon && (
            <button
              role="menuitem"
              aria-expanded={ this.expanded ? 'true' : 'false' }
              aria-haspopup="true"
              aria-controls={ this.submenuId }
              aria-label={ this.accessibleLabel }
              class="submenu-icon"
              onClick={e => this.handleToggleSubmenuClick(e)}
            >
              <span class="submenu-icon-content" tabindex="-1">
                {this.submenuIcon}
              </span>
            </button>
          )}
        </div>
        <div id={ this.submenuId } class="submenu">
          <slot name="submenu"></slot>
        </div>
      </Host>
    )
  }
}
