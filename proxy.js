const http = require('http');
const request = require('request');

// const hostname = '192.168.253.1'; //代理服务器的地址
const port = 8888;//代理服务器的端口


// 创建一个 API 代理服务
const apiServer = http.createServer((req, res) => {
    const url = 'http://127.0.0.1:23333' + req.url; //后端服务器的域
    const options = {
        url: url
    };

    function callback (error, response, body) {
        if (!error && response.statusCode === 200) {
            // 设置编码类型，否则中文会显示为乱码
            res.setHeader('Content-Type', 'text/html;charset=UTF-8');
            // 设置所有域允许跨域
            res.setHeader('Access-Control-Allow-Origin', '*');
            
            res.setHeader('Access-Control-Allow-Methods','*');
        
            res.setHeader('Access-Control-Allow-Headers','*');
            // 返回代理后的内容
            res.end(body);
        }
    }
    request.get(options, callback);
});
// 监听 8010 端口
// apiServer.listen(port, hostname, () => {
//     console.log(`接口代理运行在 http://${hostname}:${port}/`);
// });
apiServer.listen(port, () => {
    console.log(`启动代理`);
});
