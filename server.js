
const fs = require('fs');
const path = require('path')
import config from './src/api/main'; // 引入需要合并的路由配置
import doc from './src/api/doc';
let routers = [...config, ...doc];

let express = require('express'); //引入express模块
let Mock = require('mockjs'); //引入mock模块
let app = express(); //实例化express
let port = 4000; // 监听的端口

/**
 * 配置test
 * @param  {[type]} req  [客户端发过来的请求所带数据]
 * @param  {[type]} res  [服务端的相应对象，可使用res.send返回数据，res.json返回json数据，res.down返回下载文件]
 */
//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Certificate,TokenCode");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(express.static(path.join(__dirname, 'public')))
function get_file_content(filepath) {
    return fs.readFileSync(filepath);
}

routers.map(item => {
    let router = item.router.indexOf('/') === 0 ? item.router : '/' + item.router;
    app.all(router, function (req, res) {
        switch (item.type || 'mock') {
            case 'html':
                res.writeHead(200, {
                    'Content-Type': 'html'
                });
                if (item.url) { //如果有外链接的文件地址
                    res.end(get_file_content(__dirname + '/public/' + item.url));
                }else {
                    res.write(item.data);
                    res.end();
                }
              
                break;

            case 'string':
                res.send(item.data);
                break;
            case 'mock':
                // res.json(Mock.mock(item.data));
                res.json(Mock.mock({
                    'status': 'S',
                    'msg': '操作成功',
                    'remak': item.name + ' 此数据为Mock测试数据，请注意切换！',
                    'count': '@integer(20, 200)',
                    'data|10': item.data
                }))
                break;
        }
    });
})

/**
 * 监听4000 端口
 */
app.listen(port, () => console.log('mock服务启动成功，可点击链接查看：', 'http://localhost:' + port));