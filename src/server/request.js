import axios from 'axios'

const createInstance = (req) => axios.create({
  baseURL: 'http://47.95.113.63/ssr/api',
  headers: {
    cookie: req.get('cookie') || ''
  }
})

export default createInstance
