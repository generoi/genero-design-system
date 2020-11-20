import { Component, h, Prop } from '@stencil/core'
import { Event, EventEmitter, Host, Method } from '@stencil/core/internal'

/**
 * Displays Google Maps.
 *
 * Inspired by: https://www.joshmorony.com/creating-a-google-maps-web-component-with-stencil/
 */
@Component({
  tag: 'gds-google-maps',
  styleUrl: 'gds-google-maps.scss',
  shadow: true,
})
export class GdsGoogleMaps {
  /**
   * API key from GCP.
   */
  @Prop() apiKey: string
  /**
   * Latitude.
   */
  @Prop() lat: string = '60.169281'
  /**
   * Longitude.
   */
  @Prop() lng: string = '24.941480'
  /**
   * Zoom level for maps.
   */
  @Prop() zoom: number = 15
  /**
   * Add marker to the initial center.
   */
  @Prop() initialMarker: boolean = false

  /**
   * Emits Google Maps SDK once map is loaded.
   */
  @Event({ eventName: 'ready' }) ready: EventEmitter<any>

  /**
   * Google Maps container.
   */
  private container: HTMLElement
  /**
   * Google Maps Map instance.
   */
  public map: any
  /**
   * Google SDK instance.
   */
  public google: any
  /**
   * List of added markers.
   */
  public markers: any[] = []

  render() {
    return (
      <Host>
        <div ref={el => (this.container = el as HTMLElement)} class="container"></div>
      </Host>
    )
  }

  async componentDidLoad() {
    try {
      // Only initialize if the component has been previously initialized.
      if (!this.google) {
        await this.loadGoogleMapsSdk()
        this.initMap()
        this.ready.emit({
          google: this.google,
          map: this.map,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  loadGoogleMapsSdk(): Promise<any> {
    if (window['google'] && window['google']['maps']) {
      console.log('Google Maps SDK already loaded.')
      return Promise.resolve()
    }

    return new Promise(resolve => {
      window['mapInit'] = () => {
        console.log('Google Maps SDK loaded.')
        resolve(true)
      }

      let script = document.createElement('script')
      if (this.apiKey) {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit'
      } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit'
      }
      document.body.appendChild(script)
    })
  }

  initMap() {
    if (window['google']) {
      this.google = window['google']

      let mapOptions = {
        center: new this.google.maps.LatLng(this.lat, this.lng),
        zoom: this.zoom,
      }

      this.map = new this.google.maps.Map(this.container, mapOptions)

      if (this.initialMarker) {
        this.addMarker(this.lat, this.lng)
      }
    } else {
      console.error('Failed to initialize google map, sdk not available.')
    }
  }

  @Method()
  async addMarker(lat: string, lng: string, options?: object) {
    let latLng = new this.google.maps.LatLng(lat, lng)

    let marker = new this.google.maps.Marker({
      map: this.map,
      animation: this.google.maps.Animation.DROP,
      position: latLng,
      ...options,
    })

    this.markers.push(marker)

    return marker
  }
}
