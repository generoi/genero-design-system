import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { reactOutputTarget } from '@stencil/react-output-target'
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'gds',
  taskQueue: 'async',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'genero-design-system',
      proxiesFile: './react-ts/index.ts',
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
  plugins: [sass(), inlineSvg()],
  globalStyle: 'src/styles/index.scss',
}
