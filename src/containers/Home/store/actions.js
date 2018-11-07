import axios from 'axios'
import { constants } from './index'

export const getInfo = () => {
  return (dispatch, getState, instance) => {
    const action = {
      type: constants.GET_INFO,
      value: []
    }

    // const url = server ? 'http://47.95.113.63/ssr/api/news.json?secret=M5s2sPneDE' : '/api/news.json?secret=M5s2sPneDE'

    return instance.get('news.json')
      .then((res) => {
        res = res.data
        if(res && res.success) {
          const data = res.data
          action.value = data
        }
        dispatch(action)
      })
  }
}

// 'http://47.95.113.63/ssr/api/news.json?secret=M5s2sPneDE'
