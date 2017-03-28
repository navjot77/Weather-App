/**
 * Created by navjotsingh on 3/2/17.
 */

var HTMLwebpackPlugin=require("html-webpack-plugin");
var HTMLwebpackConfig=new HTMLwebpackPlugin({
    template: __dirname+'/app/index.html',
    filename: 'index.html',
    inject: 'body'
})


module.exports={
    entry:['./app/index.js'],
    output:{
        path:__dirname+'/dist',
        filename:"index_webpack_bundle.js"
    },
    module:{
        loaders:[
            {test:/\.js$/,exclude:/node_modules/, loader:"babel-loader"},
            {test:/\.css$/,loader:"style-loader!css-loader"}
        ]
    },
    plugins:[HTMLwebpackConfig]



}
