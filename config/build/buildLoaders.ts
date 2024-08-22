import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOPtions } from './types/config';

export function buildLoaders({ isDev }: BuildOPtions): webpack.RuleSetRule[] {
	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => resPath.includes('.module.'),
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]',
					},
				},
			},
			'sass-loader',
		],
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [
		//{
		//	test: /\.s[ac]ss$/i,
		//	use: [
		//		isDev ? MiniCssExtractPlugin.loader : 'style-loader',
		//		{
		//			loader: 'css-loader',
		//			options: {
		//				modules: {
		//					auto: /\.module\.scss$/i,
		//					localIdentName: isDev
		//						? '[hash:base64]'
		//						: '[path][name]__[local]--[hash:base64:5]',
		//				},
		//			},
		//		},
		//		'sass-loader',
		//	],
		//},
		cssLoader,
		typescriptLoader,
	];
}
