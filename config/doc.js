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
  // html = html + '<h3 style="margin-bottom:0px;">' + (item.model||'') + '</h3>';
  html = html + '<section style="padding:20px;">'
  html = html + '<h4 style="margin:0 0 10px 0;">' + item.name + '</h4>';
  html = html + '<a target="_blank" href="' + item.url+'"><span>' + item.url + '</span></a>';
  html = html + '</section>'
  html = html + '</article>'
})
html = html + '</div>';
 
html = html + '<input type="hidden" value="'+ JSON.stringify(config)+'">' + 
'<script src="/js/main.js"></script>'+
'</body></html>';

let home = {
  url: '',
  name: '测试String的数据',
  type: 'html',
  data: html
}

export default [home];