const port = process.env.port || process.env.npm_config_port || 8000 // dev port

module.exports = {
    devServer: {
        port: port,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            // 配置多个跨域
            [process.env.VUE_APP_BASE_API]: {
                target: `http://127.0.0.1:${port}/`,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        }
    }
}
