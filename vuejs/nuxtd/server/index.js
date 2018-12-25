
const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const router = require('koa-router')();

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })


// https://news-at.zhihu.com/api/4/news/latest
  router.get('/api/listssss', async (ctx, next) => {
      // ctx.response.body = '<h1>Index</h1>';
      ctx.body = {
        list: ['北京', '上海', '菏泽']
      }
  });

  app.use(router.routes());

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
