import base  from './config/base'; // 引入需要合并的路由配置
import test from './config/test';

let routers = [...base,...test]

let express = require('express'); //引入express模块
let Mock = require('mockjs'); //引入mock模块
let app = express(); //实例化express
 
/**
 * 配置test
 * @param  {[type]} req  [客户端发过来的请求所带数据]
 * @param  {[type]} res  [服务端的相应对象，可使用res.send返回数据，res.json返回json数据，res.down返回下载文件]
 */

routers.map(item => {
    let url = item.url.indexOf('/') === 0 ? item.url : '/' + item.url;
    app.all(url, function (req, res) {
        switch (item.type || 'mock') {
            case 'string':
                res.send(item.data);
                break;
            case 'mock':
                res.json(Mock.mock(item.data));
                break;
        }
    });
})
/**
 * 监听4000端口
 */
app.listen('4000');