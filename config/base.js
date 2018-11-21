/* 基础模块 
 *
 **/

export default [{
    url: 'login',
    name: '登录页面的接口',
    type: 'mock',
    data: {
        "status": 'S',
        "data": [{
            'name': '@cname',
            'id': '@id',
            'loginTime': '@datetime'
        }]
    }
}, {
    url: 'users',
    name: '用户列表',
    type: 'mock',
    data: {
        'status': 'S',
        'data|8-10': [{
            'index|+1': 1,
            'name': '@cname',
            'id': '@id',
            'loginTime': '@datetime'
        }]
    }
}]