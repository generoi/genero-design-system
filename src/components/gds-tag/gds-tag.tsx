import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'gds-tag',
  styleUrl: 'gds-tag.scss',
  // Use Light DOM so that Google bot can see important element without JS.
  shadow: false,
})
export class GdsTag {
  /**
   * If defined, the tag will be a link.
   */
  @Prop() href: string
  /**
   * Link open target.
   */
  @Prop() target: string

  render() {
    // Main content
    const tag = (
      <div class="gds-tag">
        <gds-label color="inherit" size="s">
          <slot></slot>
        </gds-label>
      </div>
    )

    // Render without a link
    if (!this.href) return tag

    // Render with a link
    return (
      <gds-link href={this.href} target={this.target}>
        {tag}
      </gds-link>
    )
  }
}
