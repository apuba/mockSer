# mockSer
用于前端开发测试服务数据<br />
依赖express、mockjs<br />
默认监听4000端口<br />
mock 参考　http://mockjs.com/examples.html <br />
请运行 npm install supervisor -g  安装到全局 <br />
运行 npm run start 即可启动服务 <br />
运行 npm run dev 即可启动开发模式服务 <br />
<pre>
<code>
  {
  router: '',  // 路由名称地址
  name: '测试String的数据', //路由的名字
  type: 'html', //输出的类型　类型有　mock、html、string
  url: 'html/index.html', // 如果输出类型为 html时有效，当此项有值，则会读取当前页面进行渲染
  data: html // mock的数据
}
  </code>
</pre>
