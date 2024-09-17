import type { Configuration as DevServeConfiguration } from 'webpack-dev-server';
import { BuildOPtions } from './types/config';

export function buildDevServer(options: BuildOPtions): DevServeConfiguration {
	return {
		port: options.port,
		open: true,
		hot: true,
		historyApiFallback: true,
	};
}
