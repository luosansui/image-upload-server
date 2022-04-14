
const path = require('path')
const Koa = require('koa')
const static = require('koa-static')
//导入路由
const img = require('./routes/img')
//挂载模型
const model = require('./utils/mountModel')
//实例化对象
const app = new Koa()
//开放public
app.use(static(path.join(__dirname, './public')))
//图床服务
app.use(img.routes())
app.listen(4869)