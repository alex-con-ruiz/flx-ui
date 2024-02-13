import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';

export default [
	{
		input: [
			'./index.ts'
		],
		output: {
			dir: 'dist',
			format: 'esm',
			preserveModules: true,
			preserveModulesRoot: 'src',
			sourcemap: true,
		},
		plugins: [
			typescript({
				tsconfig: './tsconfig.build.json',
				declaration: true,
				declarationDir: 'dist',
			}),
			peerDepsExternal(),
			resolve(),
			commonjs(),
			terser(),
			postcss(),
		],
	},
	{
		input: 'dist/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: [/\.css$/],
	},
];
