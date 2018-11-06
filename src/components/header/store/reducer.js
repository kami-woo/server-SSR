import { constants } from './index'

const defaultValue = {
  isLogin: true
}

export default (state = defaultValue, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case constants.GET_HEADER_INFO:
      newState.isLogin = action.data
      return newState
    default:
      return state
  }
}
