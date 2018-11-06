import { GET_TRANSLATION_LIST } from './constants'

const defaultState = {
  translationList: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case GET_TRANSLATION_LIST:
      return {
        ...state,
        translationList: action.data
      }
    default:
      return state
  }
}
