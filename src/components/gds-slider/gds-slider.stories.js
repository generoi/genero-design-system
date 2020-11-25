import { directive, html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Complex Components/Slider',
  component: 'gds-slider',
}

const executeJS = directive(() => part => {
  setTimeout(() => {
    // eslint-disable-next-line no-undef
    var slider = document.body.querySelector('gds-slider')
    part.setValue('Slider value: ' + slider.value)
    part.commit()

    slider.addEventListener('value-changed', event => {
      console.log('Changed', event)

      part.setValue('Slider value: ' + event.detail)
      part.commit()
    })
  }, 0)
})

export const Examples = () => html`
  <div class="form">
    <p>
      <gds-slider min="1" max="10" value="5" step="1" />
    </p>
    <gds-paragraph>${executeJS()}</gds-paragraph>
  </div>
`
