import axios from "axios";

const clientAxios = axios.create({
  baseURL: process.env.REACT_APP_URL_BASE,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

export default clientAxios