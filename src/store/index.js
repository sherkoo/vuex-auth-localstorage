import { createStore } from 'vuex'
import axios from 'axios';

// # How this works
// ## app.vue checks if auth is true or false
// -- if true -> run login action
// ---- on every page refresh, recreate localstorage
// -- if false -> do nothing
// ## State.auth
// -- checks of localstorage exists or returns false
// ## login action
// -- commits login mutation
// ## login mutation
// -- creates localStorage of user data
// -- sets state.auth to true
// -- sets state.user to parse localstorage user data
// ## getter checkAuth
// -- returns state.auth
// ## logout action
// -- sets state.auth to false
// -- removes localStorage of user data
export default createStore({
  state: {
    counter: 0,
    auth: localStorage.getItem('auth') || false,
    user: {}
  },
  mutations: {
    increaseCounterMut(state, randomNumber) {
      state.counter += randomNumber
      console.log('randomNumber', randomNumber)
    },
    decreaseCounterMut(state, randomNumber) {
      state.counter -= randomNumber
    },
    loginMut(state) {
      state.auth = true
      localStorage.setItem('auth', JSON.stringify({
        user: "email@address",
        name: "mark",
        lesson: 2,
      }))
      state.user = JSON.parse(localStorage.getItem('auth'))
    },
    logoutMut(state) {
      state.auth = false
      localStorage.removeItem('auth')
    }
  },
  actions: {
    // added commit to mutation 'increaseCounterMut'
    increaseCounter(state) {
      console.log('from the increase action')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        state.commit('increaseCounterMut', response.data)
      })
    },
    decreaseCounter({ commit }) {
      console.log('from the increase action')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('decreaseCounterMut', response.data)
      })
    },
    login(state) {
      console.log("login action pressed")
      state.commit('loginMut')
    },
    logout(state) {
      state.commit('logoutMut')
      state.auth = false
    },
  },
  modules: {
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    },
    checkAuth(state) {
      return state.auth
    }
  }
})
