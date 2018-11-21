export default [
    {
        url: 'mock',
        name: '测试mock的数据',
        type: 'mock',
        data: {
            "status": 200,
            "data|1-9": [{
                "name|5-8": /[a-zA-Z]/,
                "id|+1": 1,
                "value|0-500": 20
            }]
        }
    },
    {
        url: 'test',
        name: '测试String的数据',
        type: 'string',
        data: 'hello world'
    }
]