const webpack = require('webpack');
module.exports = {
    devServer: {
        proxy: {
            '/socket.io': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        resolve: {
            fallback: {path: require.resolve("path-browserify")},
            fallback: {zlib: require.resolve("browserify-zlib")},
            fallback: {stream: require.resolve("stream-browserify")},
            fallback: {buffer: require.resolve("buffer")},
            fallback: {os: require.resolve("os-browserify/browser")},
        },
        alias: {
            crypto: false,
            stream: false,
            assert: false,
            http: false,
            https: false,
            zlib: false,
            os: false
        },
        plugins: [
            new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer'],
            }),
            new webpack.ProvidePlugin({
                process: 'process/browser',
            }),
        ]
    },

    configureWebpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            // Include here the "empty" modules
            url: false,
            util: false,
            querystring: false,
            https: false,
            crypto: false,
            stream: false,
            assert: false,
            http: false,
            https: false,
            zlib: false,
            os: false
        };
    }
}




