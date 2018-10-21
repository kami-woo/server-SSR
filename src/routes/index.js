import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../containers/Home'
import Enter from '../containers/Home/enter'

// const Routes = () => {
//   return (
//     <div>
//       <Route path='/' exact component={ Home }></Route>
//       <Route path='/enter' exact component={ Enter }></Route>
//     </div>
//   )
// }

// export default Routes

export default [
  {
    path: '/',
    exact: true,
    component: Home,
    key: 'home',
    loadData: Home.loadData
  }, {
    path: '/enter',
    exact: true,
    component: Enter,
    key: 'enter'
  }
]
