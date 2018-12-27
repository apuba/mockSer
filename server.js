import config  from './config/main'; // 引入需要合并的路由配置
import doc from './config/doc';
let routers =[...config,...doc];

let express = require('express'); //引入express模块
let Mock = require('mockjs'); //引入mock模块
let app = express(); //实例化express
let port = 4000 ; // 监听的端口
 
/**
 * 配置test
 * @param  {[type]} req  [客户端发过来的请求所带数据]
 * @param  {[type]} res  [服务端的相应对象，可使用res.send返回数据，res.json返回json数据，res.down返回下载文件]
 */
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Certificate,TokenCode");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });
  
routers.map(item => {
    let url = item.url.indexOf('/') === 0 ? item.url : '/' + item.url;
    app.all(url, function (req, res) {
        switch (item.type || 'mock') {
            case 'html':            
            res.writeHead(200,{'Content-Type':'html'});
            res.write(item.data);
            res.end();
            break;

            case 'string':
                res.send(item.data);
                break;
            case 'mock':
                // res.json(Mock.mock(item.data));
                res.json(Mock.mock({
                    'status': 'S',
                    'msg':'操作成功',
                    'remak': item.name + ' 此数据为Mock测试数据，请注意切换！',
                    'count':'@integer(20, 200)',
                    'data|10': item.data
                }))
                break;
        }
    });
})

/**
 * 监听4000 端口
 */
app.listen(port,() => console.log('mock服务启动成功，可点击链接查看：', 'http://localhost:'+port));
