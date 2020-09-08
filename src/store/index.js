import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mail: 0,
    money: 0
  },
  getters: {
  },
  mutations: {
    sendMail (mail, newValue) {
      mail.count += newValue
    }
  },
  actions: {
  },
  modules: {
  }
})
