module.exports = {
    devServer: {
        proxy: {
            '/user': {
                target: 'http://localhost:8081',
                ws: true,
                changeOrigin: true
            },
            '/api': {
                target: 'http://localhost:8081',
                ws: true,
                changeOrigin: true
            },
        }
    }
}
