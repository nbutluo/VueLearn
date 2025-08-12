const mock = require('mockjs'); // 引入mockjs
const data = mock.mock({
    "data|20": [{
        "id": "@id",
        "name": "@cname",
        "phone": /^1[3578]\d{9}/,
        "ip": "@ip",
        "Remark": /[\u4E00-\u9FA5]{2,3}/
    }]
});

module.exports = () => {
    return data
};


// 安装 json-server 模块
// json-server --watch --port 8888 --host localhost index.js