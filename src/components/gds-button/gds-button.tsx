import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'gds-button',
  styleUrl: 'gds-button.css',
  shadow: true,
})
export class GdsButton {
  render() {
    return (
      <Host>
        <button>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
