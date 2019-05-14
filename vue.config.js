const webpack = require('webpack')
const path = require('path')

const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings

function resolve(dir) {
    return path.join(__dirname, dir)
}

const px2remOpts = {
    rootValue: 75
}

module.exports = {
    devServer: {
        before(app) {
            app.get('/api/seller', function (req, res) {
                res.json({
                    errno: 0,
                    data: seller
                })
            })
            app.get('/api/goods', function (req, res) {
                res.json({
                    errno: 0,
                    data: goods
                })
            })
            app.get('/api/ratings', function (req, res) {
                res.json({
                    errno: 0,
                    data: ratings
                })
            })
        }
    },
    chainWebpack(config) {
        config.module
            .rule('css')
            .test(/\.css$/)
            .oneOf('vue')
            .resourceQuery(/\?vue/)
            .use('px2rem')
            .loader('px2rem-loader')
            .options({
                remUnit: 37.5
        })
        config.plugins
            .delete('prefetch')
            .delete('preload')
        config.resolve.alias
            .set('components', resolve('src/components'))
            .set('assets', resolve('src/assets'))
            .set('api', resolve('src/api'))

        config.plugin('context')
            .use(webpack.ContextReplacementPlugin,
                [/moment[/\\]locale$/, /zh-cn/])
        // svg
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .include
            .add(resolve('src/assets/svg-icons/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'd2-[name]'
            })
            .end()
        // image exclude
        const imagesRule = config.module.rule('images')
        imagesRule
            .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
            .exclude
            .add(resolve('src/assets/svg-icons/icons'))
            .end()
    },
    publicPath: ''
}