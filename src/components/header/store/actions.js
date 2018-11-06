import { constants } from './index'

const changeLogin = (data) => {
  return {
    type: constants.GET_HEADER_INFO,
    data
  }
}

export const getHeaderInfo = () => {
  return (dispatch, getState, instance) => {
    return instance.get('isLogin.json?secret=M5s2sPneDE')
      .then((res) => {
        res = res.data
        if(res.success && res.data) {
          const data = res.data
          dispatch(changeLogin(data.login))
        }
      })
  }
}

export const login = () => {
  return (dispatch, getState, instance) => {
    instance.get('login.json?secret=M5s2sPneDE')
      .then((res) => {
        res = res.data
        if(res.success && res.data) {
          const data = res.data
          dispatch(changeLogin(true))
        }
      })
  }
}

export const logout = () => {
  return (dispatch, getState, instance) => {
    instance.get('logout.json?secret=M5s2sPneDE')
      .then((res) => {
        res = res.data
        if(res.success && res.data) {
          const data = res.data
          dispatch(changeLogin(false))
        }
      })
  }
}
