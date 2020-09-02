module.export = {
    devServer : {
        proxy: {
            "/api": {
                target: "http://study.yuanjin.tech"
            }
        }
    }
}