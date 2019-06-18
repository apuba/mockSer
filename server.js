const fs = require('fs')
const path = require('path')
const http = require('http')
const https = require('https')
let express = require('express') //引入express模块
let Mock = require('mockjs') //引入mock模块
let app = express() //实例化express

import config from './src/api/main' // 引入需要合并的路由配置
import doc from './src/api/doc'
let routers = [...config, ...doc]

let privateKey = null
let certificate = null
let credentials = null

let port = 4000 // 监听的端口
let sslPort = 4001 // 监听https 端口

let runHttps = true // 是否要运行https ---------------------------------------------------------------
const httpServer = http.createServer(app)
let httpsServer = null

/**
 * 配置test
 * @param  {[type]} req  [客户端发过来的请求所带数据]
 * @param  {[type]} res  [服务端的相应对象，可使用res.send返回数据，res.json返回json数据，res.down返回下载文件]
 */
//设置跨域访问
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With,Certificate,TokenCode'
  )
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

//引入body-parser
var bodyParser = require('body-parser');  //引入 body-parser 可以获取post的数据
app.use(express.static('public'));

//需要use的
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded
 
// 加载静态资源
app.use(express.static(path.join(__dirname, 'public')))

routers.map(item => {
  let router = item.router.indexOf('/') === 0 ? item.router : '/' + item.router
  app.all(router, function(req, res) {
    var fs = require("fs");

    switch (item.type || 'mock') {
      case 'html':
        res.writeHead(200, {
          'Content-Type': 'html'
        })
        if (item.url) {
          //如果有外链接的文件地址
          res.end(fs.readFileSync(__dirname + '/public/' + item.url))
        } else {
          res.write(item.data)
          res.end()
        }
        break

      case 'string':
        res.send(item.data)
        break
      case 'mock':
        // res.json(Mock.mock(item.data));
        let route = {
          mock: true,
          status: 'S',
          msg: '操作成功',
          remark: item.name + ' 此数据为Mock测试数据，请注意切换！',
          count: item.count || '@integer(20, 200)'
        }

        if (typeof item.data === 'object' && Array == item.data.constructor) {
          route['data|2-12'] = item.data
        } else if (typeof item.data === 'function') {
          // route['data'] = item.data(req.query)
          if (req.method === 'POST') {
            route['data'] = item.data(req.body)
          } else {
            route['data'] = item.data(req.query)
          }
        }
        else {
          route['data'] = item.data
        }

        res.json(Mock.mock(route))
        break
    }
  })
})

httpServer.listen(port, function() {
  console.log('mock服务启动成功，可点击链接查看：: http://localhost:%s', port)
})

// 是否运行https ，进行对应的证书文件读取并创建https服务
if (runHttps) {
  try {
    privateKey = fs.readFileSync('ssl/private.pem', 'utf8')
    certificate = fs.readFileSync('ssl/file.crt', 'utf8')
    credentials = {
      key: privateKey,
      cert: certificate
    }
    httpsServer = https.createServer(credentials, app)
    httpsServer.listen(sslPort, function() {
      console.log(
        'mock服务启动成功，可点击链接查看：: https://localhost:%s',
        sslPort
      )
    })
  } catch (error) {
    console.log(error);
  }  
}

/**
 * 监听4000 端口
 */
/* app.listen(port, () =>
  console.log('mock服务启动成功，可点击链接查看：', 'http://localhost:' + port)
) */

/* app.listen(sslPort, () =>
  console.log('mock服务启动成功，可点击链接查看：', 'http://localhost:' + sslPort)
) */
