process.traceDeprecation = true

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { spawn } = require('child_process')

const defaultInclude = path.resolve(__dirname, 'src')

module.exports = {

	entry: {
		'renderer': path.resolve(__dirname, 'src/renderer.js'),
	},

	resolve: {
		mainFiles: ['index'],
		extensions: ['.js']
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				include: defaultInclude
			}
		]
	},

	target: 'electron-renderer',

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Test Electron app'
		})
	],

	devtool: 'eval-cheap-module-source-map',

	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		clientLogLevel: 'none',
		stats: {
			builtAt: true,
			assets: false,
			cached: false,
			cachedAssets: false,
			children: false,
			chunks: false,
			chunkGroups: false,
			chunkModules: false,
			chunkOrigins: false,
			entrypoints: false,
			hash: false,
			modules: false,
			moduleTrace: false,
			publicPath: false,
			reasons: false,
			timings: false,
			version: false
		},
		before() {
			spawn(
				'electron',
				['.'],
				{ shell: true, env: process.env, stdio: 'inherit' }
			)
			.on('close', exitCode => process.exit(0))
			.on('error', spawnError => console.error(spawnError))
		}
	}

}
