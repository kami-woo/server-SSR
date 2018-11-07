import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../containers/Home'
import Translation from '../containers/Translation'
import NotFound from '../containers/NotFound'
import App from '../App'

export default [{
  path: '/',
  component: App,
  loadData: App.loadData,
  routes: [{
    path: '/',
    exact: true,
    component: Home,
    key: 'home',
    loadData: Home.loadData
  }, {
    path: '/translation',
    exact: true,
    component: Translation,
    key: 'translation',
    loadData: Translation.loadData
  }, {
    component: NotFound
  }]
}]
