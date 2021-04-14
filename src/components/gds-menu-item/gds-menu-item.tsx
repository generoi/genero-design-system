import { Component, h, Listen, Prop, Host } from '@stencil/core'

@Component({
  tag: 'gds-menu-item',
  styleUrl: 'gds-menu-item.scss',
  shadow: true,
})
export class GdsMenuItem {
  /**
   * Is menu item appear active.
   */
  @Prop({ reflect: true }) active: boolean

  /**
   * Show undeline on mouse enter.
   */
   @Listen('mouseenter')
   handleEnter() {
     if (!this.active) {
       this.active = true
     }
   }

  /**
   * Hide undeline on mouse leave.
   */
   @Listen('mouseleave')
   handleLeave() {
     if (this.active) {
       this.active = false
     }
   }

  render() {
    return (
      <Host>
        <div class="content">
          <slot></slot>
        </div>
      </Host>
    )
  }
}
