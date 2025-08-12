## 初始化项目
```text
mkdir mockjs
安装 mockjs
yarn init
yarn add mockjs
```
## 创建 generate.js
```json
// generate.js - 生成 db.json
const Mock = require('mockjs');
const fs = require('fs');

const data = {
  users: Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: Mock.Random.cname(),                    // 中文姓名
    phone: Mock.Random.integer(10000000000, 19999999999), // 11 位手机号
    desc: Mock.Random.cparagraph(1, 5),           // 1-5 句描述
    tag: Mock.Random.cword(2, 6),                 // 标签（中文词）
    age: Mock.Random.integer(18, 60),             // 年龄
    image: Mock.Random.image('200x100', Mock.Random.color(), Mock.Random.word(3)) // 图片
  }))
};

// 写入 db.json
fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
console.log('✅ db.json 生成成功！');
```
## 生成静态数据文件
```text
node generate.js
```
> 你会看到项目中多了一个 db.json 文件，内容是 5 条用户数据。
## 配置 package.json 脚本
```json
{
      "scripts": {
        "mock:gen": "node generate.js",
        "mock:serve": "json-server --watch db.json --port 3000",
        "mock": "yarn mock:gen && yarn mock:serve"
      }
}
```
## 启动本地 API 服务
```bash
# 方法一：一键生成 + 启动
yarn mock

# 方法二：分步执行
yarn mock:gen    # 重新生成数据
yarn mock:serve  # 启动服务
```