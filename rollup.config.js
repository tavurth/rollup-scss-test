import json from 'rollup-plugin-json';
import buble from 'rollup-plugin-buble';
import scss from 'rollup-plugin-scss';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/index',
    name: 'my-module',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs',
    },
    external: [
        'react',
        'prop-types',

        // prettier-no-wrap
    ],
    globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    plugins: [
        json(),
        scss(),
        buble(),
        resolve(),
        commonjs(),

        // prettier-no-wrap
    ],
};
