module.exports = {
    devServer: {
        proxy: {
            '/user': {
                target: 'http://localhost:8000',
                ws: true,
                changeOrigin: true
            },
            '/api': {
                target: 'http://localhost:8000',
                ws: true,
                changeOrigin: true
            },
            '/api/detail': {
                target: 'http://localhost:8000',
                ws: true,
                changeOrigin: true
            },
            '/api/apiManagement': {
                target: 'http://localhost:8000',
                ws: true,
                changeOrigin: true
            },
            '/s3':{
                target: 'http://localhost:8000',
                ws: true,
                changeOrigin: true
            },
        }
    }
}
