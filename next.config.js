const path = require('path')

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config

        config.module.rules.push({ test: /\.gql?$/, loader: 'webpack-graphql-loader' })


        config.resolve.alias = {
            ...config.resolve.alias,
            types: path.resolve(__dirname,'./src/types')
        }

        return config
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config
    },
}