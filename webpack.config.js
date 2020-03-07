const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const ExtractTextPlugin=require("extract-text-webpack-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css插件

const entryMode = (pagename) => {
  return `./src/view/${pagename}/${pagename}.js`
}

const outputHtml = (pagename) => {
  return  new htmlWebpackPlugin({
    template: `./src/view/${pagename}/${pagename}.html`,
    filename: `view/${pagename}.html`,//改html的输出文件名index.html改为了a.hmtl,
    inject: true,
    chunks: [`${pagename}`],
    minify:{
        removeAttributeQuotes:true,//去除引号
        removeComments:false,//去除注释
        removeEmptyAttributes:true,//去除空属性
        collapseWhitespace:false//去除空格
    }
  })
}
module.exports = {
    mode: 'development',//production,development
  	entry: {
      index:entryMode('index'),
      //list:'./src/pageview/listpage/index.js',
      //article:'./src/pageview/articlepage/index.js',
  	},//入口
  	output: {//出口
    	//filename: 'js/[name].[hash].js',
      filename:'js/[name].js',
    	path: __dirname + '/dist'
  	},
  	module: {
        rules: [
          	{ 	
          		test: /\.css$/, use:ExtractTextPlugin.extract({
            	fallback:'style-loader',
	            use:[{
	              loader:'css-loader?name=./css/[name].[hash].[ext]',
	              options:{
	                minimize:true,//代码压缩
	              }
	            }],
            	publicPath:"../"
            })},//正则，表示后缀为css的文件
            { 
            	test: /(\.jpg|\.png|\.jpeg|\.gif)$/, 
            	use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    publicPath: "../images",
                    outputPath: "images/"
                  },
                }
              ]
            },//同理......
            {
            	test: /\.(woff|ttf|svg|eot|xttf|woff5)$/, 
            	use:'file-loader?name=./fonts/[name].[ext]'
            },
    		    {
    		  		test:/\.(jsx|js)$/,
    		  		use:{
    		    		loader:'babel-loader'
    		  		},
    		  		exclude:/node_modules/ //排除不编译node_modules文件        
    			  },
            {
              test: /\.scss/,
              use: ExtractTextPlugin.extract({
                use:[
                  {
                    loader:'css-loader',
                    options:{
                      minimize:true,//代码压缩
                    }
                  },
                  {
                    loader:'sass-loader',
                    options:{
                      minimize:true,//代码压缩
                    }
                  }
                ],
                fallback:'style-loader'
              })
            }
        ]
    },
  	devServer: {
	  	contentBase: path.join(__dirname,'dist') ,
	  	compress: true,
	  	host:'localhost',//服务器地址
      port: 4001,
      open: true,
	  	inline:true//实时刷新
	  },
  	plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new OptimizeCssAssetsPlugin(),
  	    outputHtml('index'),
        // new htmlWebpackPlugin({
        //   template: `./src/pageview/listpage/index.html`,
        //   filename: `pageview/list.html`,//改html的输出文件名index.html改为了a.hmtl,
        //   inject: true,
        //   chunks: ['list',],
        //   minify:{
        //       removeAttributeQuotes:true,//去除引号
        //       removeComments:false,//去除注释
        //       removeEmptyAttributes:true,//去除空属性
        //       collapseWhitespace:false//去除空格
        //   }
        // }),
        // new htmlWebpackPlugin({
        //   template: `./src/pageview/articlepage/index.html`,
        //   filename: `pageview/article.html`,//改html的输出文件名index.html改为了a.hmtl,
        //   inject: true,
        //   chunks: ['article',],
        //   minify:{
        //       removeAttributeQuotes:true,//去除引号
        //       removeComments:false,//去除注释
        //       removeEmptyAttributes:true,//去除空属性
        //       collapseWhitespace:false//去除空格
        //   }
        // }),
   	]

};