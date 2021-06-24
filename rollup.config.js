import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';
import pkg from './package.json'

const isDev = process.env.NODE_ENV !== 'production';
export default [
	{
		input: 'src/main.js',
		output: {
			name: 'knight-sdk',
			file: 'dist/knight-sdk.js',
			format: 'umd'
		},
		plugins: [
			resolve(),
			commonjs(),
			eslint(),
			!isDev && terser() // 代码压缩
		]
	}
];
