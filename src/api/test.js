import * as common from '../common'
export default [{
    router: 'mock',
    name: '测试mock的数据',
    type: 'mock',
    data: {
        "name": '@cname',
        "info|5": [{
            "color|1":common.RandomColor(5),
            "name|5-8": /[a-zA-Z]/,
            "id|+1": 1,
            "value|0-500": 20
        }]
    }
}]