/* 订单模块 
 *
 **/
let modelName = '订单管理模块';
export default [{
        url: 'storeTrxOrderDeliveryService/findOrderDeliveryPagination',
        model: modelName,
        name: '订单管理-发货管理列表',
        type: 'mock',
        data: [{
            'deliveryCode|2000-3000': 1,
            'status|1-5': 1,
            'statusMeaning|1': ['未发货', '已发货', '运输中', '派件中', '已签收'],
            'orders|1-5': [{
                'orderId': '@integer(888, 2222)',
                'orderNum': '@integer(10000)',
                'creationDate': '@date()'
            }],
            'crationDate': '@date("yyyy-mm-dd")',
            'expressCode': '@integer(10000)',
            'memberCode': '@integer(500)',
            'memberPhone': /^1[3857][1-9]\d{8}/,
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
        url: 'storeTrxOrderService/findOrderInfoPagination',
        model: modelName,
        name: '订单信息',
        type: 'mock',
        data: [{
            'status|1-5': 1
        }]
    }

]