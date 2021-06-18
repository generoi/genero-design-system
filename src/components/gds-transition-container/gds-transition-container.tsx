import { Component, Prop, h, Host } from '@stencil/core'

/**
 * This is a wrapper to transition content
 * @slot transition
 */

@Component({
  tag: 'gds-transition-container',
  styleUrl: 'gds-transition-container.scss',
})


export class GdsTransitionContainer {
  /**
   * Select type of animation
   */
  @Prop() animation: string = "fade-in-up"
  /**
   * Set animation duration
   */
  @Prop() duration: string = "0.7s"
  /**
   * Set easing
   */
  @Prop() ease: string = "cubic-bezier(.67,.01,.14,1.01)"
  /**
   * Set delay
   */
  @Prop() delay: string = "0s"

  componentDidLoad() {
    const elementsToTransition = document.querySelectorAll('.gds-transition-container')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.setAttribute("style", `animation: ${this.animation} ${this.duration} ${this.ease} ${this.delay} forwards`)
        } else {
          entry.target.setAttribute("style", "none")
        }
      })
    })


    elementsToTransition.forEach((element) => {
      observer.observe(element)
    })
  }

  render() {
    return (
      <Host>
        <div
        class="gds-transition-container">
          <slot name="transition"></slot>
        </div>
      </Host>
    )
  }
}
