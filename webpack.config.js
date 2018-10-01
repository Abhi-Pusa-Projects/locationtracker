const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
        {
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            query:{
                presets:['es2015','react']
            }
        },
        {
            test:/\.(s*)css$/,
            use:['style-loader','css-loader', 'sass-loader']
        },
        // {
        //     test:/\.(png|svg|jpg|jpeg)$/,
        //     loader:'file-loader',
        //     options:{
        //         name:'images/[name].[ext]'
        //     }
        // }
    ]
}
};