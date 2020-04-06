const path = require('path');

module.exports = {
    entry: {
        app: [
            path.join(__dirname, '/src/webapp/index.js'),
        ],
        // test: [
        //     path.join(__dirname, '/webapp/test/index.js'),
        // ],
    },
    output: {
        path: path.join(__dirname, './src/public/dist'),
        filename: 'bundle-[name].js',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    mode: 'development'
};
