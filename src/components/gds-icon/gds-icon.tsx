import { Component, Prop, h } from '@stencil/core'

/**
 * Wraps Font Awesome icons.
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
