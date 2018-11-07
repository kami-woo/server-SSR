import axios from 'axios'
import config from '../config'

const instance = axios.create({
  baseURL: '/api',
  params: {
    secret: config.secret
  }
})

export default instance
 