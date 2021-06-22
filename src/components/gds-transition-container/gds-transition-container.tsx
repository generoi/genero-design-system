import { Component, Element, Prop, h } from '@stencil/core'

/**
 * This is a wrapper to transition content
 * @slot Only 1 slot, just wrap the content you want to add a transition animation for
 */

@Component({
  tag: 'gds-transition-container',
  styleUrl: 'gds-transition-container.scss',
  shadow: false,
})


export class GdsTransitionContainer {
  @Element() el: HTMLElement;

  io: IntersectionObserver;
  /**
   * Animations (fade-in-up)
   * 
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
  @Prop() delay: string = "0.1s"

  componentDidLoad() {
    this.addIntersectionObserver();
  }

  addIntersectionObserver() {
    const elementsToTransition = this.el.querySelectorAll('.gds-transition-container')

    this.io = new IntersectionObserver((entries: any) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.setAttribute("style", `animation: ${this.animation} ${this.duration} ${this.ease} ${this.delay} forwards`);
        } else {
          entry.target.setAttribute("style", "none")
        }
      });
    });

    elementsToTransition.forEach((element) => {
      this.io.observe(element)
    })
  }

  render() {
    return (
      <div class="gds-transition-container">
        <slot/>
      </div>
    )
  }
}
