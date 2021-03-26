import { Component, h, Prop } from '@stencil/core'

/**
 * YouTube Embedded iframe player.
 *
 * Options: https://fernandosarachaga.com/en/youtube-how-to-configure-iframe-parameters/
 */
@Component({
  tag: 'gds-youtube-player',
  styleUrl: 'gds-youtube-player.scss',
  shadow: false,
})
export class GdsYouTubePlayer {
  /**
   * Video ID
   */
  @Prop() videoId: string
  /**
   * Accessible Label
   */
  @Prop() accessibleLabel: string
  /**
   * Indicates whether the video player controls are displayed.
   */
  @Prop() controls: boolean = true

  render() {
    var src = `https://www.youtube.com/embed/${this.videoId}?&modestbranding=1&rel=0`
    src += `&controls=${this.controls ? 1 : 0}`

    if (window && window.location) {
      src += `&origin=${window.location.origin}`
    }

    return (
      <div class="gds-youtube-player">
        <iframe
          class="gds-youtube-player-iframe"
          src={src}
          title={this.accessibleLabel}
          frameborder="0"
          allowFullScreen></iframe>
      </div>
    )
  }
}
