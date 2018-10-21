import routes from '../routes'
import ReactDom from 'react-dom'
import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'

const store = getClientStore()

const App = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <div>
          { routes.map( route => <Route {...route} />) }
        </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.hydrate((<App />), document.getElementById('root'))
