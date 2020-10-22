import { html } from 'lit-html'

export default {
  title: 'Complex Components/YouTubePlayer',
  component: 'gds-youtube-player',
}

// prettier-ignore
export const Examples = () => html`
  <gds-paragraph>This player takes all available width and keeps the aspect ratio.</gds-paragaph>
  <gds-paragraph>Here it has 300px.</gds-paragaph>
  <div style="margin-bottom: 50px; width: 300px;">
    <gds-youtube-player video-id="A0FZIwabctw" autoplay />
  </div>
  <gds-paragraph>Here controls are hidden which forces to display YouTube logo.</gds-paragaph>
  <div style="margin-bottom: 50px; width: 300px;">
    <gds-youtube-player video-id="A0FZIwabctw" controls="false" />
  </div>
  <gds-paragraph>Here it has 100% width.</gds-paragaph>
  <div style="margin-bottom: 50px;">
    <gds-youtube-player video-id="A0FZIwabctw" />
  </div>
`
