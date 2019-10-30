import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';

const pkg = require('./package.json');

export default {
  input: 'lib/index.ts',
  output: [
    {
      file: pkg.main,
      name: 'LinkedInAuthClient',
      format: 'umd',
      sourcemap: true
    },
    { file: pkg.module, format: 'es', sourcemap: true }
  ],
  external: ['qs'],
  watch: {
    include: 'lib/**'
  },
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      objectHashIgnoreUnknownHack: true
    }),
    sourceMaps(),
    copy({
      targets: [{ src: 'types/*', dest: 'dist' }]
    })
  ]
};
