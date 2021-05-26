import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    employees: []
  },
  mutations: {
    SET_EMPLOYEES: (state, employees) => {
      state.employees = employees
    }
  },
  actions: {
    GET_EMPLOYEES ({ commit }) {
      axios.get('http://localhost:3000/users/privet', { }, { })
        .then(res => {
          commit('SET_EMPLOYEES', res.data)
          return res.data
        })
        .catch(error => {
          console.log(error)
          return error
        })
    }
  },
  getters: {
    EMPLOYEES (state) {
      return state.employees
    }
  }
})

export default store
