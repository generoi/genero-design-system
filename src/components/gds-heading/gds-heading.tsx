import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'gds-heading',
  styleUrl: 'gds-heading.scss',
  // Expose the h elements for better SEO.
  shadow: false,
})
export class GdsHeading {
  /**
   * Size of the heading.
   */
  @Prop() size: string = 'm'
  /**
   * Render the heading as a h element for SEO purposes.
   *
   * Those h element should be visible to GoogleBot:
   * https://www.searchenginejournal.com/shadow-dom/353644/
   */
  @Prop() as: string

  render() {
    const cls = `gds-heading-${this.size}`

    // This is a bit clumsy but I couldn't figure out a better way.
    switch (this.as) {
      case 'h1':
        return (
          <h1 class={cls}>
            <slot></slot>
          </h1>
        )
      case 'h2':
        return (
          <h2 class={cls}>
            <slot></slot>
          </h2>
        )
      case 'h3':
        return (
          <h3 class={cls}>
            <slot></slot>
          </h3>
        )
      case 'h4':
        return (
          <h4 class={cls}>
            <slot></slot>
          </h4>
        )
      case 'h5':
        return (
          <h5 class={cls}>
            <slot></slot>
          </h5>
        )
      default:
        return (
          <div class={cls}>
            <slot></slot>
          </div>
        )
    }
  }
}
