import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/axios.js'
import router from '../router'
const baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'post',
        url: `${baseURL}/login`,
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          // console.log(data.access_token)
          localStorage.access_token = data.access_token
          router.push('/products')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
