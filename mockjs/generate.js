// generate.js
const Mock = require('mockjs');
const fs = require('fs');

const data = {
    users: Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        name: Mock.Random.cname(),                    // 中文姓名
        phone: Mock.Random.integer(10000000000, 19999999999), // 11 位手机号
        desc: Mock.Random.cparagraph(1, 5),           // 1-5 句话的描述
        tag: Mock.Random.cword(2, 6),                 // 2-6 个汉字的标签
        age: Mock.Random.integer(18, 60),             // 年龄 18-60
        image: Mock.Random.image('200x100', Mock.Random.color(), Mock.Random.word(3)) // 图片
    }))
};


// 写入 db.json 文件
fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
console.log('✅ 数据已生成并保存到 db.json');