const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const Dotenv = require('dotenv-webpack')
// let fs = require('fs')
require('dotenv').config({ path: './.env' })

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, './src/index.js'),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.(jpg|png)$/,
				use: {
					loader: 'url-loader',
				},
			},
			{
				test: /\.(woff|woff2)$/,
				use: {
					loader: 'url-loader',
				},
			},
			{
				test: /\.css$/i,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
				],
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		],
	},

	resolve: {
		// fallback: {
		// 	fs: false,
		// 	os: require.resolve('os-browserify/browser'),
		// },
		extensions: ['*', '.js', '.jsx'],
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(process.env),
		}),
	],
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, './dist'),
		hot: true,
	},
}
