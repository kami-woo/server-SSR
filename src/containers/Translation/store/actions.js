import { GET_TRANSLATION_LIST } from './constants'

const changeList = (data) => {
  return {
    type: GET_TRANSLATION_LIST,
    data
  }
}

export const getTranslationList = () => {
  return (dispatch, getState, instance) => {
    return instance.get('translations.json?secret=M5s2sPneDE')
      .then((res) => {
        res = res.data
        if(res.success && res.data) {
          const data = res.data
          dispatch(changeList(data))
        }
      })
  }
}
