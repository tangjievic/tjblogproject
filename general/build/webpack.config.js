const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //css压缩
const entryMode = (pagename) => {
        return `./src/view/${pagename}/${pagename}.ts`
    }
    //const HtmlWebpackPlugin = HtmlWebpackPlugin;
const outputHtml = (pagename) => {
    return new htmlWebpackPlugin({
        template: `./src/view/${pagename}/${pagename}.html`,
        filename: `view/${pagename}.html`, //改html的输出文件名index.html改为了a.hmtl,
        chunks: [`${pagename}`],
        inject: true,
        minify: {
            removeAttributeQuotes: true, //去除引号
            removeComments: false, //去除注释
            removeEmptyAttributes: true, //去除空属性
            collapseWhitespace: false //去除空格
        }
    })
}

module.exports = {
    //mode: 'development',
    // 指定入口文件
    // 这里我们在src文件夹下创建一个index.ts
    entry: {
        index: entryMode('index'),
        lists: entryMode('lists'),
        art: entryMode('art'),
        404: entryMode('404')
    },
    // 指定输出文件名
    output: {
        //filename: "ts/[name].[hash].js",
        filename: 'js/[name].js',
        path: path.join(__dirname, '/../dist')
    },
    resolve: {
        // 自动解析一下拓展，当我们要引入src/index.ts的时候，只需要写src/index即可
        // 后面我们讲TS模块解析的时候，写src也可以
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        // 配置以.ts/.tsx结尾的文件都用ts-loader解析
        // 这里我们用到ts-loader，所以要安装一下
        // npm install ts-loader -D
        rules: [{
                test: /\.(tsx|ts)$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        //loader: 'css-loader?name=./css/[name].[hash].[ext]',
                        loader: 'css-loader?name=./css/[name].[ext]',
                        options: {
                            minimize: true, //代码压缩
                        }
                    }],
                    publicPath: "../"
                })
            }, //正则，表示后缀为css的文件
            {
                test: /(\.jpg|\.png|\.jpeg|\.gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: "../images",
                        outputPath: "images/"
                    },
                }]
            }, //同理......
            {
                test: /\.(woff|ttf|svg|eot|xttf|woff5)$/,
                use: 'file-loader?name=./fonts/[name].[ext]'
            },
            {
                test: /\.less/,
                use: ExtractTextPlugin.extract({
                    use: [{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true, //代码压缩
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true, //代码压缩
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })
            }
        ]
    },
    // 指定编译后是否生成source-map，这里判断如果是生产打包环境则不生产source-map
    devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
    // 这里使用webpack-dev-server，进行本地开发调试
    devServer: {
        contentBase: path.join(__dirname, '/../dist'),
        stats: "errors-only",
        compress: true,
        host: "localhost",
        open: true,
        port: 4001,
        inline: true //实时刷新
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    // 这里用到两个插件，所以首先我们要记着安装
    // npm install html-webpack-plugin clean-webpack-plugin -D
    plugins: [
        // 这里在编译之前先删除dist文件夹
        // new CleanWebpackPlugin({
        //   cleanOnceBeforeBuildPatterns: [path.join(__dirname,'/../dist')]
        // }),
        new ExtractTextPlugin('css/[name].css'),
        new OptimizeCssAssetsPlugin(),
        // 这里我们指定编译需要用模板，模板文件是./src/template/index.html，所以接下来我们要创建一个index.html文件
        outputHtml('index'),
        outputHtml('lists'),
        outputHtml("art"),
        outputHtml('404')
    ]
};