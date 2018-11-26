
// app.js
const Koa = require('koa');
const path = require('path')
const router = require('koa-router')();
// 模板引擎
const render = require('koa-art-template');
// 跨域
var cors = require('koa2-cors');
// body解析
const bodyParser = require('koa-bodyparser');
// 静态资源
const static = require('koa-static');
// 创建一个Koa对象表示web app本身:
const app = new Koa();

render(app, {
  root: path.join(__dirname, './static'),
  extname: '.html',
  // debug: process.env.NODE_ENV !== 'production'
});
app.use(cors());
// 解决body 需在router之前注册到app对象上
app.use(bodyParser());
// 静态资源目录
app.use(static(
  path.join( __dirname,'./static')
));


app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});


// 对于任何请求，app将调用该异步函数处理请求：
// app.use(async (ctx, next) => {
//     await next();
// });

router.get('/user', async (ctx, next) => {
    ctx.render('user',{
            data:'kerry'
    });
});
router.post('/login', async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    var res = {
      code:200,
      msg:'success',
      data:{
        name:'阿健',
        age:25
      }
    };
    ctx.response.body = res;
});

// add router middleware:
app.use(router.routes());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');	