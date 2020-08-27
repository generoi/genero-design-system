import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'gds-tag-group',
  styleUrl: 'gds-tag-group.scss',
  shadow: true,
})
export class GdsTagGroup {
  render() {
    return (
      <Host>
        <div>
          <slot></slot>
        </div>
      </Host>
    )
  }
}
