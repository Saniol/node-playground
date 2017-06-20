const path = require('path');

module.exports = {
    entry: {
        app: [
            path.join(__dirname, '/webapp/src/index.js'),
        ],
        // test: [
        //     path.join(__dirname, '/webapp/test/index.js'),
        // ],
    },
    output: {
        path: path.join(__dirname, './webapp/dist'),
        filename: 'bundle-[name].js',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /.jsx?$/,
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
