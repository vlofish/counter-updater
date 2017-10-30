const Path = require('path');
const Html = require('html-webpack-plugin');

const CONFIG = {
    entry : Path.resolve(__dirname, 'src/js/main.js'),

    module : { // Study more about modules
        rules : [
            {
                test   : /\.js/,
                use    : [
                    {
                        loader : 'babel-loader',
                        query  : {
                            presets : ['angular', 'es2015', 'stage-2'] // Loaders accept query parameters. This can be used to pass configuration to the loader.
                        }
                    }
                ] 
            },
            {
                test : /\.css/,
                use  : ['style-loader', 'css-loader']
            }
        ]
    },

    plugins : [
        new Html({
            template : './src/index.html'
        })
    ],

    output : {
        path     : Path.resolve(__dirname, 'dist/'),
        filename : 'bundle.js'
    }
}

module.exports = CONFIG;