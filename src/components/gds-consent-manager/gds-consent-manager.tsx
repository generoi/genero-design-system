/**
 * Inspired by https://github.com/sqr33/cookie-opt-in
 *
 * Cookie format: (version,consent1,consent2,consent3,consent4)  Example(String): "1,1,1,0,1"
 *
 * Exampel object
 * const configMap = {
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
 */

import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core'
import { CookieNoticeSetting } from './settings'

/**
 * This is the consent manager.
 * @slot label - the heading part of the consent manager
 * @slot content - the hidden part of the consent manager
 */
@Component({
  tag: 'gds-consent-manager',
  styleUrl: 'gds-consent-manager.scss',
  shadow: true,
})
export class GdsConsentManager {

  /**
   * Consent manager default language
   */
  private defaultLanguage = 'FI'

  /**
   * Config map
   */
   private configMap: Object

  /**
  *
  */
  private settings: CookieNoticeSetting

  /**
   * Define headline
   */
  @Prop() headline: string

  /**
   * Define description
   */
  @Prop() description: string

  /**
   *
   */
  @Prop() configs: string

  /**
   * Set language
   */
  @Prop() language = this.defaultLanguage

  /**
   * Mutables
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  isopen: boolean = true /* Determine if consent manager is visible */

  @Prop({
    mutable: true,
    reflect: true,
  })
  accordionIsOpen: boolean = false /* Determine if accordions inside consent manager is open */

  @Prop({
    mutable: true,
    reflect: true,
  })
  languageNavigation: boolean = true /* Determine if language navigation is visible */

  /**
   *  Creates an Event that a hook can be hooked to
   */
  @Event({ eventName: 'consent' }) consentEvent: EventEmitter<any>

  /**
  * Runs before component was been loaded
  */
  componentWillLoad() {
    // Parsing content from frontend
    this.configMap = JSON.parse(this.configs)
    // Selecting correct language
    this.settings = this.configMap[this.language]
    this.configMap[this.language]
    const consentString = this.getCookie('gds-consent')
    if (consentString) {
      // Emits event if consent has been given earlier
      this.runEvent()
      // TODO: Request consent if settings.version and cookie version don't match
      this.isopen = false
      let consentValues = consentString.split(',')
      consentValues.shift() // Removes version number
      this.settings.consents.forEach((consent, i) => {
        consent.consent = consentValues[i] === '1'
      })
    }

  }
/* TODO: Fix language switcher
  changeLanguage(languageCode) {
    console.log("Change language")
    this.language = languageCode
  }
*/
  toggleAccordions() {
    this.accordionIsOpen = true
  }

  toggleConsent(consent) {
    consent.consent = !consent.consent
  }

  // Set selected consents
  acceptSelectedCookies() {
    const consentValues = this.settings.consents.map(({consent}) => consent ? 1 : 0)
    const consentString = '1,' + consentValues.join(',')
    this.setCookie('gds-consent' , consentString)
    console.log(consentString)
    this.runEvent()

    this.isopen = false
  }

  // Set all consents
  acceptAllCookies() {
    const consentValues = this.settings.consents.map(({consent}) => consent ? 1 : 1)
    const consentString = '1,' + consentValues.join(',')
    this.setCookie('gds-consent' , consentString)

    this.runEvent()

    this.isopen = false
  }

  /**
   * Cookies
   */
   getCookie = (key) => {
    var result
    document.cookie.split(';').some(function(item) {
      var parts = item.split('=')
      if (parts[0] && parts[0].trim() === key) {
        result = parts[1]
        return true
      } else {
        return false
      }
    })
    return result
  }

  // 13 months from now is specified in GDPR.
  getDate13MonthsFromNow = () => {
    return new Date(Date.now() + 13 * 30 * 86400000)
  }

  setCookie = (key, value) => {
    // Get base domain
    const domain = window.location.hostname.split('.').splice(-2).join('.')
    // Get expires
    var expires = this.getDate13MonthsFromNow()
    // Set cookie
    document.cookie = key + '=' + value + '; domain=' + domain + '; path=/; SameSite=None; Secure; expires=' + expires.toUTCString()
  }

  runEvent() {
    this.consentEvent.emit({
      setting: this.settings,
    })
  }

  render() {
    return (
      <Host>
        <div class={
          (this.isopen ? 'gds-cm-wrapper is-open' : 'gds-cm-wrapper') || {
          languageNavigation : this.languageNavigation
          }} >
          <div class="gds-cm-overlay">
            <div class="gds-cm">
              <div class="header">
                <slot name="headline">
                  {this.headline && (
                    <gds-heading size="s" class="headline">
                      {this.headline}
                    </gds-heading>
                  )}
                </slot>
                {/* TODO: Fix language switcher
                <nav aria-label="Language menu" class={this.languageNavigation ? "" : "hidden"}>
                  <gds-menu key="321">
                    {Object.values(this.configMap).map((config) =>
                      <a slot="item" onClick={ ((event) => event.preventDefault()) || (() => this.changeLanguage(config.languageCode)) } aria-label={config.language}>
                        <gds-menu-item onClick={ () => this.changeLanguage(config.languageCode) }>{config.languageCode}</gds-menu-item>
                      </a>
                    )}
                  </gds-menu>
                </nav>
                */}
                </div>
                <div class="body">
                <slot name="description">
                  {this.description && (
                    <gds-paragraph size="l" class="description">
                      {this.description}
                    </gds-paragraph>
                  )}
                </slot>
                <div class={this.accordionIsOpen ? 'is-open accordions-wrapper' : 'accordions-wrapper'}>
                  {this.settings.consents.map((consent) =>
                    <gds-accordion>
                      <gds-label slot="label" size="l" onClick={ (event) => event.stopPropagation() }>
                        <input
                          onClick={ () => this.toggleConsent(consent) }
                          type="checkbox"
                          disabled={ consent.necessary }
                          checked={ consent.necessary || consent.consent}
                        />{consent.label}
                      </gds-label>
                      <div slot="icon-collapse" class="icon iconCollapse">
                        ❮
                      </div>
                      <div slot="icon-expand" class="icon iconExpand">
                        ❯
                      </div>
                      <div slot="content">
                        <gds-paragraph size="s" class="gds-cm-accordion-content">{consent.description}</gds-paragraph>
                      </div>
                    </gds-accordion>
                  )}
                </div>
              </div>
              <div class="footer">
                <gds-button onClick={ this.accordionIsOpen ? () => this.acceptSelectedCookies() : () => this.toggleAccordions() } size="s">{ this.accordionIsOpen ? this.settings.buttonAcceptSelected : this.settings.buttonEdit }</gds-button>
                <gds-button onClick={ () => this.acceptAllCookies() } size="s">Accept all</gds-button>
              </div>
            </div>
          </div>
        </div>
      </Host>
    )
  }
}
