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
  private linkSlot: HTMLSlotElement
  private submenuButtonEl: HTMLElement

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
   * Whether the submenu is opened by a click
   */
  private forced: boolean = false

  /**
   * Accessible label of the submenu.
   * Defaults to textContent of the link slot.
   */
  @Prop() accessibleLabel: string

  /**
   * HTML ID for the submenu used by aria attributes.
   */
  private submenuId: string

  private isSubmenu: boolean
  private hasSubmenuIconSlot: boolean

  /**
   * Expand on mouse enter.
   */
  @Listen('mouseenter')
  handleEnter() {
    // Skip this event on mobile devices.
    if (window.innerWidth <= 1024) return

    this.open();
   }

  /**
   * Collapse on mouse leave.
   */
  @Listen('mouseleave')
  handleLeave() {
    // Skip this event on mobile devices.
    if (window.innerWidth <= 1024) return
    // Skip when the menu item open was triggered by a click
    if (this.forced) return

    this.close();
  }

  @Listen('close')
  handleClose() {
    this.close();

    if (this.host.contains(document.activeElement)) {
      this.submenuButtonEl?.focus();
    }
  }

  private open(): void {
    if (!this.expanded) {
      this.expanded = true;
      this.active = true;
    }
  }

  private close(): void {
    if (this.expanded) {
      this.expanded = false;
      this.active = false;
      this.forced = false;
    }
  }

  /**
   * Toggle submenu visibility by clicking the chevron icon.
   */
   private handleToggleSubmenuClick(event: MouseEvent) {
    event.preventDefault()
    event.stopPropagation()

    // First click always makes it sticky open
    if (!this.forced) {
      this.forced = true
      this.open()
      return
    }

    // Second time it toggles it off.
    this.close()
  }

  componentWillLoad() {
    ++idCounter;
    this.submenuId = `gds-menu-item-nested-submenu-${idCounter}`
    this.linkSlot = this.host.querySelector(':scope > [slot="link"]') as HTMLSlotElement
    this.hasSubmenuIconSlot = !!this.host.querySelector(':scope > [slot="submenu-icon"]')
    // @todo eventually add megamenu alternative
    this.isSubmenu = this.host.querySelector(':scope > [slot="submenu"]').tagName === 'gds-submenu';

    if (!this.accessibleLabel) {
      this.accessibleLabel = this.linkSlot.textContent.trim()
    }
  }

  render() {
    return (
      <Host>
        <div class="menu-item">
          <slot name="link"></slot>

          {(this.submenuIcon || this.hasSubmenuIconSlot) && (
            <button
              aria-expanded={ this.expanded ? 'true' : 'false' }
              aria-haspopup="true"
              aria-controls={ this.submenuId }
              aria-label={ this.accessibleLabel }
              class="submenu-icon"
              onClick={e => this.handleToggleSubmenuClick(e)}
              ref={el => (this.submenuButtonEl = el as HTMLElement)}
            >
              <span class="submenu-icon-content" tabindex="-1" aria-hidden="true">
                <slot name="submenu-icon">
                  {this.submenuIcon}
                </slot>
              </span>
            </button>
          )}
        </div>
        <div
          id={ this.submenuId }
          class={ this.isSubmenu ? 'submenu' : ''}
          role="region"
          aria-label={ this.accessibleLabel }
        >
          <slot name="submenu"></slot>
        </div>
      </Host>
    )
  }
}
