const connPromise = require('../utils/connectDB')
//挂载模型
require('../model/image')
;(async () => {
    const conn = await connPromise
    //同步模型
    /* conn.sync({
        alter: true
    }) */
})()