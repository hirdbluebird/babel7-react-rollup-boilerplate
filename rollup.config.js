import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';

const external = [
  '@react-pdf/renderer',
  'react',
  'react-dom',
];

export default {
  input: 'src/main.js',
  output: {
    file: 'build/build.js',
    format: 'iife',
    name: 'bundle',
  },

  // Specify here external modules which you don't want to include
  // in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external,

  plugins: [
    // Compile TypeScript/JavaScript files
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        '@babel/preset-env',
        '@babel/preset-react' 
      ],
      plugins: [],
    }),
    // Allow bundling cjs modules. Rollup doesn't understand cjs
    cjs({
      exclude: 'src/**',
    }),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve(),
  ],
};
