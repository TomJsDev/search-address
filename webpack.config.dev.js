const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

process.env.NODE_ENV = 'development'

module.exports = {
	mode: 'development',
	target: 'web',
	devtool: 'cheap-module-source-map',
	entry: './src/index',
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	stats: 'minimal',
	devServer: {
		historyApiFallback: true,
		client: { overlay: false },
		// nesessary 3 lines because of Chrome issue July 2021 @T
		allowedHosts: 'all',
		headers: { 'Access-Control-Allow-Origin': '*' },
		https: false
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			favicon: 'src/images/search-address-icon.png'
		}),
		new MiniCssExtractPlugin()
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx|snap)$/i,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.scss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { modules: true } },
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
				type: 'asset/resource'
			}
		]
	}
}
