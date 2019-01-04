/* 门店管理
 *
 **/
let Mock = require('mockjs'); //引入mock模块
import * as TYPES from '../types';
import {MODULE_NAME,REGEX} from '../../config';

let moduleName = MODULE_NAME.STORE; // 模块名称
let Random = Mock.Random;

export default[
  {
    router: 'storeInfoService/findPagination',
    module: moduleName,
    name: '门店列表',
    type: 'mock',
    data: [{
      storeId:'@integer(100,3000)',
      storeNo:'ST'+'@integer(1000,5000)',
      storeName:'@city@ctitle(3,10)专营店',
      contactName:'@cname',
      contactNameMobile:REGEX.MOBILE
    }]
}
]