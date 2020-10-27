import { directive, html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Complex Components/GoogleMaps',
  component: 'gds-google-maps',
}

const executeJS = directive(() => part => {
  part.setValue('Loading Google Maps...')

  setTimeout(() => {
    // eslint-disable-next-line no-undef
    var gdsMaps = document.body.querySelector('gds-google-maps')
    gdsMaps.addEventListener('ready', google => {
      console.log('Google SDK', google)
      gdsMaps.addMarker('60.169281', '24.949780')
      gdsMaps.addMarker('60.166281', '24.941480')

      part.setValue('Google Maps loaded and markers added.')
      part.commit()
    })
  }, 0)
})

export const Examples = () => html`
  <div>
    <gds-google-maps
      api-key="AIzaSyBx9C7VVROobmVtHJsbWLGYP32RrRb_WZw"
      zoom="14"
      lat="60.169281"
      lng="24.941480"
      initial-marker
    /></gds-google-maps>
    <gds-paragraph>${executeJS()}</gds-paragraph>
  </div>
`
