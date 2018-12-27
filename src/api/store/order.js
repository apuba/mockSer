/* 订单模块 
 *
 **/
let Mock = require('mockjs'); //引入mock模块
import * as TYPES from '../types';
import {MODULE_NAME,REGEX} from '../config';

let moduleName = MODULE_NAME.STORE; // 模块名称
let Random = Mock.Random;

export default [{
        router: 'storeTrxOrderDeliveryService/findOrderDeliveryPagination',
        module: moduleName,
        name: '订单管理-发货管理列表',
        type: 'mock',
        data: [{
            'deliveryCode|2000-3000': 1,
            'status|1-5': 1,
            'statusMeaning|1': TYPES.G_DELIVERY_TYPE,
            'orders|1-5': [{
                'orderId': '@integer(888, 2222)',
                'orderNum': '@integer(10000)',
                'creationDate': '@date()'
            }],
            'crationDate': '@date("yyyy-mm-dd")',
            'expressCode': '@integer(10000)',
            'memberCode': '@integer(500)',
            'memberPhone': REGEX.MOBILE,
            'receiveUser': '@cname',
            'receiveUserPhone': /^1[3857][1-9]\d{8}/,
            'provinceId': '@province',
            'cityId': '@city',
            'districtId': '@county',
            'address': '@county(true)',
            'pullExpressCodeTime': '@date',
            'confirmDeliveryTime': '@date'
        }]
    },
    {
        router: 'storeTrxOrderService/findOrderInfoPagination',
        module: moduleName,
        name: '订单信息',
        type: 'mock',
        data: [{
            'status|1-5': 1
        }]
    },
    {
        router: 'storeTrxOrderService/findById',
        module: moduleName,
        name: '根据orderId 查订单详情',
        type: 'mock',        
        data: {
            "orderId":'@integer(3000)',
            "orderNum":'@integer(333)',
            "parentOrderNum":'@integer(666)',
            "applicationCode|1":TYPES.G_SOURCE_CHANNEL,
            "orderType|1-5":1,
            "orderTypeMeaning|1":TYPES.G_ORDER_TYPE,
            "memberCode":'@integer(3000)',
            "memberPhone": REGEX.MOBILE,
            "isSalesAfter|1": TYPES.G_YES_OR_NO,
            "orderStatus|1":'@integer(1,6)' +'0',
            "orderStatusMeaning|1":TYPES.G_ORDER_STATUS,
            "payStatus|1-5":1,
            "payStatusMeaning|1":TYPES.G_PAY_STATUS,
            "creationDate":'@date',
            "versionNum":'@integer(20)',
            "shopCode":'@integer(333)',
            "shopName":'@ctitle',
            "tradeNum":'@integer(333)',
            "virtualCnyType|1":TYPES.G_VIRTUALL_CURRENCY,
            "receivableAmt":'@float(60, 100, 0,2)',
            "actualAmt":'@float(60, 95, 0,2)',
            "preferentialAmt":'@float(1, 30, 0,2)',
            "preferentialVirtualAmt":'@integer(20, 1000)',
            "receivableVirtualAmt":'@integer(20, 1000)',
            "actualVirtualAmt":'@integer(20, 1000)',
            "freightAmtType|1":TYPES.G_FREIGHT_TYPE,
            "freightAmt":'@float(20,100,0,2)',
            "creationDate":'@date',
            "payTime":'@date',
            "payChannelCode|1":TYPES.G_PAY_CHANNEL,
            "paySerialNumber":'@increment(10000)',
            "confirmReceiveTime":'@date',
    
            "orderDelivery|1-6":[{
                "deliveryInfoId":'@integer(10000)',
                "deliveryType|1": TYPES.G_DELIVERY_TYPE,
                "isScanCodeDelivery|1":TYPES.G_YES_OR_NO,
                "deliveryUser":'@cname',
                "deliveryStoreNo":'@city(ture)',
                "deliverySupplierNo":'@ctitle(5,10)',
                "receiveSser":'@cname',
                "receiveUserPhone":REGEX.MOBILE,
                "provinceId":'@province',
                "cityId":'@city',
                "districtId":'@county',
                "streetId":'@region',
                "address":'@ctitle(5,15)',
                "expressCode":'@integer(1000)',
                "deliveryCode":'@integer(1000)',
                "versionNum":'@integer(1,10)',
            }],
            "orderDetails|1-10":[{
                "pic": Random.image('300X150',Random.color()),
                "materialCode":'@integer(1000)',
                "materialName":'@ctitle(5,15)',
                "attrs|1-3":[{
                    "attrName|1":TYPES.G_COLOR_TYPE,
                    "attrValue|1": TYPES.G_PRODUCT_SIZE
                }],
                "productTrxNum":'@integer(20)',
                "shopCode":'@string("lower",6)',
                "shopName":'@ctitle(5,15)',
                "retailPrice":'@float(50,500,0,2)',
                "virtualCnyType|1":TYPES.G_VIRTUALL_CURRENCY,
                "receivableAmt":'@float(50,500,0,2)',
                "actualAmt":'@float(50,500,0,2)',
                "preferentialAmt":'@float(5,200,0,2)',
                "preferentialVirtualAmt":'@integer(100,1000)',
                "receivableVirtualAmt":'@integer(100,1000)',
                "actualVirtualAmt":'@integer(100,1000)',
                "deliveryTemplateId":'@integer(1,10)',
                "deliveryTemplateName":'@ctitle(5,10)'
            }],
            "orderLogs|1-6":[{
                "operateCode":'@string("lower",6)',
                "operateName|1":TYPES.G_OPERATE_SYSTEM,
                "operateUserName":'@cname',
                "operateTime":'@date'
            }],
            "orderTradeCmts|2-15":[{
                "materialCode":'@string("lower",6)',
                "materialName":'@ctitle(5,15)',
                "cmtContent":'@ctitle(5,200)',
                "cmtTime":'@date',
                "integratedScore":'@integer(20,100)',
                "cmtScore":'@integer(20,100)',
                "logisticsScore":'@integer(20,100)',
                "shopScore":'@integer(20,100)',
            }],
            "coupons|1-3":[{
                "couponCode":'@string("lower",6)',
                "couponName":'@ctitle(5,10)',
                "orderNum":'@integer(1000)',
                "materialCode":'@string("lower",8)',
                "materialName":'@ctitle(5,10)',
                "productTrxNum":'@integer(1,5)',
                "retail_price":'@float(20,300,0,2)',
                "actualAmt":'@float(50,200,0,2)',
                "preferentialAmt":'@float(1,100,0,2)'
            }],
            "cards|1-3":[{
                "cardCode":'@string("lower",6)',
                "orderNum":'@integer(2000)',
                "materialCode":'@string("lower",6)',
                "materialName":'@ctitle(5,10)',
                "productTrxNum":'@integer(1,10)',
                "retail_price":'@float(20,300,0,2)',
                "actualAmt":'@float(20,300,0,2)',
                "preferentialAmt":'@float(20,300,0,2)',
            }],
            "activitys|1-5":[{
                "activityCode":'@string("lower",6)',
                "activityName":'@ctitle(5,10)',
                "orderNum":'@ctitle(5,10)',
                "materialCode":'@string("lower",8)',
                "materialName":'@ctitle(5,10)',
                "productTrxNum":'@integer(1-,0)',
                "retail_price":'@float(20,300,0,2)',
                "actualAmt":'@float(20,300,0,2)',
                "preferentialAmt":'@float(20,300,0,2)',
            }],
            "interest|1-3":[{
                "interestCode":'@string("lower",6)',
                "interestName":'@ctitle(5,10)',
                "receiveType|1":TYPES.G_TAKE_TYPE
            }]
        }
    }

]