import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'gds-media-card',
  styleUrl: 'gds-media-card.scss',
  shadow: true,
})
export class GdsMediaCard {
  /**
   *
   */
  @Prop() heading: string

  render() {
    return (
      <div>
        <div>Picture here</div>
        <div>{this.heading}</div>
        <div>Labels here</div>
      </div>
    )
  }
}
