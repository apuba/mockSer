

/* 券管理
 *
 **/
let Mock = require('mockjs'); //引入mock模块
import * as TYPES from '../types';
import {MODULE_NAME,REGEX} from '../../config';

let moduleName = MODULE_NAME.STORE; // 模块名称
let Random = Mock.Random;

export default[
  {
    router: 'couponPaperInfoService/PaperBatch',
    module: moduleName,
    name: '纸质券批次列表',
    type: 'mock',
    data: [{
      batchCode:'BT'+'@integer(1000,5000)',
      batchName:'@ctitle(3,10)'
    }]
}
]