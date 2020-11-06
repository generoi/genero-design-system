# gds-text-button



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                       | Type      | Default       |
| --------------- | ---------------- | --------------------------------- | --------- | ------------- |
| `apiKey`        | `api-key`        | API key from GCP.                 | `string`  | `undefined`   |
| `initialMarker` | `initial-marker` | Add marker to the initial center. | `boolean` | `false`       |
| `lat`           | `lat`            | Latitude.                         | `string`  | `'60.169281'` |
| `lng`           | `lng`            | Longitude.                        | `string`  | `'24.941480'` |
| `zoom`          | `zoom`           | Zoom level for maps.              | `number`  | `15`          |


## Events

| Event   | Description                               | Type               |
| ------- | ----------------------------------------- | ------------------ |
| `ready` | Emits Google Maps SDK once map is loaded. | `CustomEvent<any>` |


## Methods

### `addMarker(lat: string, lng: string, options?: object) => Promise<any>`



#### Returns

Type: `Promise<any>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
