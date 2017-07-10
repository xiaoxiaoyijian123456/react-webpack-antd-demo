var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './src/index.js');
var BUILD_PATH = path.resolve(__dirname, './dist');

module.exports = {
	entry: APP_PATH,
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-1']
		},{
			test: /\.less$/,
			loader: 'style!css!less'
        },{
            test: /\.css/,
            loader: 'style-loader!css-loader'
		},{
    		test: /\.(png|jpg)$/,
    		loader: 'url?limit=50000'
    	}]
	},
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: BUILD_PATH,
        compress: true,
        port: 8000
    }
}
