var path = require('path');

module.exports = [
    {
        entry: [
            "babel-polyfill",
            path.join(__dirname, 'client/js/src/app.js')
        ],
        output: {
            path: path.join(__dirname, 'client/js/bundle'),
            filename: 'app.bundle.js'
        },
        devtool: 'inline-source-map',
        module: {
            loaders: [
                {
                    test: path.join(__dirname, 'client/js/src'),
                    exclude: /node_modules/,
                    loader: 'babel?presets[]=es2015'
                }
            ]
        }
    }
];