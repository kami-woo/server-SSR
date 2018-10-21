import express from 'express';
import React from 'react';
import render from './utils'
import { getStore } from '../store'
import { matchRoutes } from 'react-router-config'
import routes from '../Routes'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {

  const store = getStore()
  let promises = []

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
