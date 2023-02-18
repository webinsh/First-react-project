const path = require('path')

const clientConfig = require(path.resolve(__dirname,'cfg/webpack.client.config.js'))
const serverConfig = require(path.resolve(__dirname, 'cfg/webpack.server.config.js'))

module.exports = [
    clientConfig,
    serverConfig,
]