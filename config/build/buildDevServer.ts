import path from 'path';
import { BuildOPtions } from './types/config';

import type { Configuration as DevServeConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOPtions): DevServeConfiguration {
	return {
		static: {
			directory: path.join(__dirname, 'build'),
		},
		port: options.port,
		open: true,
		hot: true,
		historyApiFallback: true,
	};
}
