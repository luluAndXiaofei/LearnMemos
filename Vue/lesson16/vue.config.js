module.exports = {
    // vue的配置
    devServer: {
        proxy: {
            "/api": {
                target: "http://study.yuanjin.tech"
            }
        }
    }
}