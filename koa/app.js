/**
 * Created by apolloao on 2018/4/12.
 */

const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const GraphqlRouter = require('./routes/graphql');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const path = require('path');
const staticServer = require('koa-static');
const readFile = (path, ascCode) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path,ascCode, (err,data)=>{
            if(err){
                reject(console.log('err'))
            }else{
                resolve(data.toString())
            }
        })
    })
}

router.use('', GraphqlRouter.routes());
app.use(staticServer(path.join(__dirname,'web')));
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.use(async (ctx)=>{
    ctx.status = 404;
    ctx.body = await readFile('../web/html/404.html')
});

module.exports =app;