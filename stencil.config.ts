import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { reactOutputTarget } from '@stencil/react-output-target'

export const config: Config = {
  namespace: 'gds',
  taskQueue: 'async',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '../',
      proxiesFile: './react/index.ts',
    }),
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [sass()],
}
