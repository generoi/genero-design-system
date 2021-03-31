import { Component, Prop, Host, h, Element } from '@stencil/core';

import searchIcon from './search-icon.svg';

@Component({
  tag: 'gds-search-form',
  styleUrl: 'gds-search-form.scss',
  shadow: true,
})
export class GdsSearch {
  @Element() host: HTMLElement;
  @Prop({reflect: true}) collapsed: boolean = false
  @Prop({reflect: true}) floating: boolean = false
  @Prop() accessibleSubmitLabel: string = 'Search'
  @Prop() accessibleInputLabel: string = 'Search'
  @Prop() placeholder: string = 'Search'
  @Prop() query: string = 's'
  @Prop() action: string

  render() {
    return (
      <Host>
        <slot></slot>

        <form
          action={this.action}
          method="get"
          role="search"
        >
          <gds-input-wrapper label={this.accessibleInputLabel} hide-label-visually>
            <input slot="input" type="search" name={this.query} placeholder={this.placeholder} autocomplete="off" />
          </gds-input-wrapper>

          <button type="submit" aria-label={this.accessibleSubmitLabel}>
            <slot name="search-icon">
              <div innerHTML={searchIcon} />
            </slot>
          </button>
        </form>
      </Host>
    );
  }

}
