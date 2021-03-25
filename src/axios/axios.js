import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-tuku.herokuapp.com'
})

export default instance
