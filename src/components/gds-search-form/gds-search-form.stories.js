import { html } from 'lit-html'

export default {
  // This is the folder where this component shows in Storybook.
  title: 'Complex Components/SearchForm',
}

export const Examples = () => html`
  <div>
    <gds-paragraph>
      Search forms can be either collapsed or not, this property be toggled according to viewport width
    </gds-paragraph>
    <gds-search-form></gds-search-form>
    <gds-search-form collapsed></gds-search-form>
  </div>
  <div>
    <gds-paragraph>Search form can collapse on media queries.</gds-paragraph>
    <gds-search-form action="https://www.google.com" query="q" collapse-on="(max-width: 600px)"></gds-search-form>
  </div>
  <div style="margin-top: 2rem;">
    <gds-paragraph>Border style examples</gds-paragraph>
    <style>
      .boxed:not([collapsed]),
      .boxed[collapsed]:focus-within {
        --gds-search-form-background: white;
        --gds-search-form-border: solid 2px black;
        --gds-search-form-border-radius: 5px;
      }
      .boxed[collapsed] {
        --gds-search-form-border: solid 2px transparent;
      }
    </style>
    <gds-search-form class="boxed"></gds-search-form>
    <gds-search-form class="boxed" collapsed></gds-search-form>
  </div>
  <div style="margin-top: 2rem; justify-content: flex-end;">
    <div style="display: inline-flex;">
      <gds-label style="margin-right: 1em; line-height: 39px;">Floating example</gds-label>
      <gds-search-form floating class="boxed"></gds-search-form>
      <gds-search-form floating class="boxed" collapsed></gds-search-form>
    </div>
  </div>
`
