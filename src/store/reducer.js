import { reducer as homeReducer } from '../containers/Home/store'
import { reducer as headerReducer } from '../components/header/store'
import { reducer as translationReducer } from '../containers/Translation/store'
import { combineReducers } from 'redux'

const reducer = combineReducers({
  homeReducer,
  headerReducer,
  translationReducer
})

export default reducer
