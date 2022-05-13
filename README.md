## 自建图床服务
> + `npm i`
> + 按照`/config/config.json`的信息创建对应数据库
> + 打开`/utils/mountModel`里的`同步模型`注释，运行一次进行数据表同步
> + 将`/utils/mountModel`里的`同步模型`再次注释掉
> + `node app`起飞

> 注: 如果遇到跨域问题请加载`koa2-cors`包，附[链接](https://www.npmjs.com/package/koa2-cors)

![](./public/image/20220413/upload_7df17b53f31070dc083e835ff70a015a.jpg)
