import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../containers/Home'
import Enter from '../containers/Home/enter'

const Routes = () => {
  return (
    <div>
      <Route path='/' exact component={ Home }></Route>
      <Route path='/enter' exact component={ Enter }></Route>
    </div>
  )
}

export default Routes
