import Routes from '../routes'
import ReactDom from 'react-dom'
import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

ReactDom.hydrate((
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
), document.getElementById('root'))
