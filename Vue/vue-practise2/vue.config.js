module.exports = {
    devServer : {
        proxy: {
            "/api": {
                target: "http://study.yuanjin.tech"
            }
        }
    }
}