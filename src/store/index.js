import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mail: 0,
    money: 10,
    moneyPerMail: .1,
    conversion: 100,
    clickMultiplier: 1,
    moneyMultiplier: 1,
    conversionMultiplier: 1
  },
  getters: {
    spamSent: state => {
      return state.mail;
    },
    moneyMade: state => {
      return state.money.toFixed(2);
    },
    currentRate: state => {
      return (state.moneyPerMail * state.moneyMultiplier).toFixed(2);
    },
    conversionRate: state => {
      return state.conversion * state.conversionMultiplier;
    }
  },
  mutations: {
    sendSpam(state) {
      // mutate state
      state.mail += state.clickMultiplier;
    },
    makeMoney(state) {
      state.money += state.mail / 100;
    }
  },
  actions: {
    makeMoney({ commit }) {
      setInterval(() => {
        commit("makeMoney");
      }, 1000);
    }
  },
  modules: {}
});
