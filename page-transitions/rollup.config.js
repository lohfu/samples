import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: [
        ['transform-react-jsx'],
      ],
      presets: [ "es2015-rollup", "es2016", "es2017", "stage-0" ],
    }),

    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),

    nodeResolve({
      jsnext: true,  // Default: false
      main: true,  // Default: true
      browser: true,  // Default: false
      extensions: ['.js', '.jsx'],
    }), commonjs({
      include: [
        'node_modules/**',
      ],
      namedExports: {
        'node_modules/react/react.js': ['Component', 'Children', 'PropTypes', 'createElement'],
      },
    //  sourceMap: false,  // Default: true
    })
  ],
  external: [
    'react',
    'react-dom',
    'react-redux',
    'redux',
  ],
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-redux': 'ReactRedux',
    'redux': 'Redux',
  },
  format: 'iife',
  entry: 'src/index.jsx',
  dest: 'bundle.js',
};
