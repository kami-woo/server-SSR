import express from 'express';
import React from 'react';
import render from './utils'
import { getStore } from '../store'
import { matchRoutes } from 'react-router-config'
import routes from '../Routes'
import proxy from 'express-http-proxy'

const app = express()
app.use(express.static('public'))
app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver(req) {
    return '/ssr/api' + req.url
  }
}))

app.get('*', (req, res) => {

  const store = getStore(req)

  let promises = []  // 存储获取数据的
  // matchedRoutes存储匹配当前路径的路由
  const matchedRoutes = matchRoutes(routes, req.path)
  matchedRoutes.forEach( item => {
    if(item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise)
    }
  })

  Promise.all(promises)
    .then(() => {
      const context = { css:[] }
      const html = render(req, store, routes, context)

      if(context.action === 'REPLACE') {
        res.redirect(301, context.url)
      }else if(context.NOT_FOUND) {
        res.status(404)
      }
      res.send(html)
    })
})

app.listen(3000)
