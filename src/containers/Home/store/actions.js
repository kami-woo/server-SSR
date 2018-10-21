import axios from 'axios'
import { constants } from './index'

export const getInfo = (dispatch) => {
  const action = {
    type: constants.GET_INFO,
    value: []
  }
  return axios.get('http://47.95.113.63/ssr/api/news.json?secret=M5s2sPneDE')
    .then((res) => {
      res = res.data
      if(res && res.success) {
        const data = res.data
        action.value = data
      }
      dispatch(action)
    })
}
