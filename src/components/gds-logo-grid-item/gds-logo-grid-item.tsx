import { Component, h, Prop } from '@stencil/core'

/**
 * This component takes as much space as the parent grid allows.
 * The image is displayed in the center with relative margins.
 */
@Component({
  tag: 'gds-logo-grid-item',
  styleUrl: 'gds-logo-grid-item.scss',
  shadow: true,
})
export class GdsLogoGridItem {
  /**
   * If defined, the logo will be a link.
   */
  @Prop() href: string
  /**
   * Link open target.
   */
  @Prop() target: string
  /**
   * Image url.
   */
  @Prop() imageUrl: string

  render() {
    // Main content
    const content = (
      <div class="gds-logo-grid-item-container">
        <picture class="image">
          <source srcSet={this.imageUrl} />
          <img src={this.imageUrl} />
        </picture>
      </div>
    )

    // Render without a link
    if (!this.href) return content

    // Render with a link
    // FIXME: Not vertically aligns now that gds-link is using shadown dom.
    return (
      <gds-link block href={this.href} target={this.target}>
        {content}
      </gds-link>
    )
  }
}
