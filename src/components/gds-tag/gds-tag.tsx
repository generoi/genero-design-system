import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'gds-tag',
  styleUrl: 'gds-tag.scss',
  shadow: true,
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
  /**
   * Color for the tag text.
   * TODO: Implement the color custom variable scheme.
   */
  @Prop() color: string = 'white'
  /**
   * Tag background color.
   * TODO: Implement the color custom variable scheme.
   */
  @Prop() backgroundColor: string

  render() {
    // Main content
    const tag = (
      <div
        class="tag"
        style={{
          backgroundColor: this.backgroundColor,
          color: this.color,
        }}>
        <gds-label color={this.color} size="s">
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
