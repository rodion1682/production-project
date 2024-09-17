import { ResolveOptions } from 'webpack';
import { BuildOPtions } from './types/config';

export function buildResolvers(options: BuildOPtions): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {},
	};
}
