import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'gds-visually-hidden',
  styleUrl: 'gds-visually-hidden.scss',
  shadow: true,
})
export class GdsVisuallyHidden {
  @Prop() focusable: Boolean = false

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
