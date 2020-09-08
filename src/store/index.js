import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mail: 0,
    money: 0,
    clickMultiplier: 1,
    moneyMultiplier: 1
  },
  getters: {
    spamSent: state => {
      return state.mail;
    },
    moneyMade: state => {
      return state.money;
    }
  },
  mutations: {
    sendSpam(state) {
      // mutate state
      state.mail += state.clickMultiplier;
    },
    makeMoney(state) {
    }
  },
  actions: {
    makeMoney({ commit }) {
      setInterval(() => {});
    }
  },
  modules: {}
});
