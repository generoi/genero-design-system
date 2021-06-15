import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { postcss } from '@stencil/postcss';
import { reactOutputTarget } from '@stencil/react-output-target'
import { inlineSvg } from 'stencil-inline-svg';
import autoprefixer from 'autoprefixer';
import { generateCustomElements } from './generate-custom-elements';

export const config: Config = {
  namespace: 'gds',
  taskQueue: 'async',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'genero-design-system',
      proxiesFile: './react-ts/index.ts',
      // Needed because index.ts seems to include loader in a wrong way.
      includeDefineCustomElements: false,
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
      type: 'docs-custom',
      generator: generateCustomElements,
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass(),
    inlineSvg(),
    postcss({plugins: [autoprefixer()]}),
  ],
  globalStyle: 'src/styles/index.scss',
}
