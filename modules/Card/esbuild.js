import esbuild from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

esbuild
	.build({
		entryPoints: ['./src/index.ts'],
		outfile: 'dist/index.js',
		bundle: true,
		minify: false,
		minifyWhitespace: true,
		treeShaking: true,
		platform: 'node',
		format: 'esm',
		target: 'node14',
		plugins: [
			nodeExternalsPlugin(),
		],
	})
	// eslint-disable-next-line no-undef
	.catch(() => process.exit(1));
