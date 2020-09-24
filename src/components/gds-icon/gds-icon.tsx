import { Component, Prop, h } from '@stencil/core'

/**
 * Wraps Font Awesome icons.
 *
 * There is a small problem with Fontawesome and shadow dom. So when you load the fontawesome script
 * in the top of the page, it won't be able to access the icon inside the shadow dom and thus won't be
 * able to display the icon. So there are two options I think:
 *
 * 1) Use icons via slots. Then the fontawesome script can properly transform the i elements to svgs.
 * 2) Investigate how to use this inside gds-icon:
 * https://fontawesome.com/how-to-use/on-the-web/advanced/svg-javascript-core
 */
@Component({
  tag: 'gds-icon',
  styleUrl: 'gds-icon.scss',
  shadow: false,
})
export class GdsIcon {
  /**
   * FA icon name.
   */
  @Prop() name: string
  /**
   * FA icon style. Only use one style.
   */
  @Prop() regular: boolean
  @Prop() solid: boolean
  @Prop() light: boolean
  @Prop() duotone: boolean

  /**
   * Style overrides.
   */
  @Prop() class: string

  render() {
    return (
      <i
        class={{
          fa: true,
          far: this.regular,
          fas: this.solid,
          fal: this.light,
          fad: this.duotone,
          [`fa-${this.name}`]: true,
          icon: true,
          [this.class]: !!this.class,
        }}></i>
    )
  }
}
