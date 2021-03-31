import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'gds-hamburger',
  styleUrl: 'gds-hamburger.scss',
  shadow: true,
})
export class GdsHamburger {
  /**
   */
  @Prop({reflect: true}) active: boolean = false

  @Prop() label: string
  @Prop() accessibleLabel: string

  render() {
    return (
      <Host>
        <slot>{this.label}</slot>
        <span
          class="icon"
          aria-label={this.accessibleLabel}
        ></span>
      </Host>
    );
  }

}
