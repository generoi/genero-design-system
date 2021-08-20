import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Complex Components/ConsentManager',
  component: 'gds-consent-manager',
}

const configMap = {
  FI: {
    languageCode: 'FI',
    language: 'Finnish',

    buttonAcceptAll: 'Hyväksyä kaikki',
    buttonEdit: 'Muokkaa evästeitä',
    buttonAcceptSelected: 'Hyväksy valitut',

    consents: [
      {
        id: 'consent-necessary',
        label: 'Necessary',
        description: 'These cookies are technically required for our core website to work properly, e.g. security functions or your cookie consent preferences.',
        necessary: true,
        consent: true,
      },
      {
        id: 'consent-statistics',
        label: 'Statistics',
        description: 'In order to improve our website going forward, we anonymously collect data for statistical and analytical purposes. With these cookies we can, for instance, monitor the number or duration of visits of specific pages of our website helping us in optimising user experience.',
        necessary: false,
      },
      {
        id: 'consent-chat',
        label: 'Chat Support',
        description: 'We want to make it as easy as possible for you to reach our support teams, e.g. via our chat box, which requires certain cookies.',
        necessary: false,
      },
      {
        id: 'consent-marketing',
        label: 'Marketing',
        description: 'These cookies help us in measuring and optimising our marketing efforts.',
        necessary: false,
      },
    ]
  }
}

const resurfaceLink = html`
  <gds-button onclick="document.querySelector('gds-consent-manager').setAttribute('isopen', 'true')">
    Resurface consent manager
  </gds-button>
`

// prettier-ignore
const OptionsTemplate = args => {
  return html`
    <gds-consent-manager
    ?language-navigation="${args.languageNavigation}"
    configs="${JSON.stringify(configMap)}"
    >
      <gds-heading size="m" slot="headline">This is a headline</gds-heading>
      <gds-paragraph size="s" slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </gds-paragraph>
    </gds-consent-manager>
    ${resurfaceLink}
  `
}
export const Options = OptionsTemplate.bind({})
Options.argTypes = {
  }

export const Examples = () => html`
  <gds-consent-manager configs="${JSON.stringify(configMap)}" language-navigation="true">
    <gds-heading size="m" slot="headline">This is a headline</gds-heading>
    <gds-paragraph size="s" slot="description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </gds-paragraph>
  </gds-consent-manager>
`
