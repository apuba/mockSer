/* 基础模块 
*
**/
 
export default  [{
    url: 'login',
    name: '登录页面的接口',
    type: 'mock',
    data: {
        "status": 'S',
        "data": [{
           'name': '@cname',
           'id': '@index',
           'loginTime': '@datetime'
        }]
    }
}]