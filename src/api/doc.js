import config from './main'; // 引入需要合并的路由配置

let webTitle = 'Mock数据测试API';

let html = '<!DOCTYPE html>' +
  '<html>' +
  '<head>' +
  '<meta charset="utf-8" />' +
  '<title>' + webTitle +'</title>' +
  '</head>' +
  '<body>';

html = html + '<div id="mockSer_doc">';
config.map(item => {
  html = html + '<article>'
  html = html + '<h3 style="margin-bottom:0px;">' + (item.module||'') + '</h3>';
  html = html + '<section style="padding:20px;">'
  html = html + '<h4 style="margin:0 0 10px 0;">' + item.name + '</h4>';
  html = html + '<a target="_blank" href="' + item.router+'"><span>' + item.router + '</span></a>';
  html = html + '</section>'
  html = html + '</article>'
})
html = html + '</div>';
 
html = html + '<input type="hidden" value="'+ JSON.stringify(config)+'">' + 
'<script src="http://libs.baidu.com/jquery/1.11.3/jquery.min.js"></script>'+
'<script src="/js/main.js"></script>'+
'</body></html>';

// 输出的路由配置
let home = {
  router: '',
  name: '测试String的数据',
  type: 'html',
  // url: 'html/index.html',　　
  data: html
}

export default [home];