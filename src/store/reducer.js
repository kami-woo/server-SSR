import { reducer as homeReducer } from '../containers/Home/store'
import { combineReducers } from 'redux'

const reducer = combineReducers({
  homeReducer
})

export default reducer
