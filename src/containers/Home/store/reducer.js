// import { constants } from './index'
import { GET_INFO } from './constants'

const defaultValue = {
  name: 'GXS-Wcm',
  list: []
}

export default (state = defaultValue, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case GET_INFO: 
      newState.list = action.value
      return newState
    default: return state
  }
}
