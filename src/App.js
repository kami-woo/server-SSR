import React, { Component } from 'react'
import Header from './components/header'
import { renderRoutes } from 'react-router-config'
import { actions } from './components/header/store'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { renderRoutes(this.props.route.routes) }
      </div>
    )
  }
}

App.loadData = (store) => {
  return store.dispatch(actions.getHeaderInfo())
}

export default App
