/*
 * @Author: houxingzhang 
 * @Date: 2019-06-17 14:09:28 
 * @Last Modified by: houxingzhang
 * @Last Modified time: 2019-06-17 14:41:50
 */

let Mock = require('mockjs'); //引入mock模块
import * as TYPES from '../types';
import {MODULE_NAME,REGEX} from '../../config';

let moduleName = MODULE_NAME.VUELEARN; // 模块名称
let Random = Mock.Random;


let List = []
const count = 60
// 创建60个用户
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }))
}


export default [   
    {
        router: 'vue/user/list',
        module: moduleName,
        name: '获取测试用户列表',
        type: 'mock',
        data: function () {
          return List
        },
        count: count
    },
    {
      router: 'vue/user/add',
      module: moduleName,
      name: '添加用户',
      type: 'mock',
      data: function (params) {
        return {"message":"添加成功","state":true,"data":params}
      }
  },
]