import { Component, h, Host, Listen, Prop } from '@stencil/core'

@Component({
  tag: 'gds-menu-item-nested',
  styleUrl: 'gds-menu-item-nested.scss',
  shadow: true,
})
export class GdsMenuItemNested {
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

  render() {
    return (
      <Host>
        <li
          class={{
            item: true,
            active: this.active,
          }}>
          <div class="content">
            <div class="item">
              <slot name="link"></slot>
              {this.submenuIcon ?
                <span class={{
                  'submenu-icon': true,
                  'submenu-icon-expanded': this.expanded,
                }} onClick={e => this.handleToggleSubmenuClick(e)}>{this.submenuIcon}</span>
              : null}
            </div>
          </div>
          <div class={{
            'submenu-positioner': true,
            'submenu-expanded': this.expanded,
          }}>
            <div class="submenu-container">
              <slot name="submenu"></slot>
            </div>
          </div>
        </li>
      </Host>
    )
  }
}
