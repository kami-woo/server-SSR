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
      promises.push(item.route.loadData(store))
    }
  })

  Promise.all(promises)
    .then(() => {
      res.send(render(req, store, routes))
    })
})

app.listen(3000)
