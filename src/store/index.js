import Vue from "vue";
import Vuex from "vuex";
import upgrades from "./modules/upgrades";

Vue.use(Vuex);

// Basic mail stuff below
export default new Vuex.Store({
  modules: {
    upgrades
  },
  state: {
    mail: 0,
    money: 1,
    moneyPerMail: 0.01,
    conversion: 100,
    clickMultiplier: 1,
    moneyMultiplier: 1,
    conversionMultiplier: 1
  },
  getters: {
    spamSent: state => {
      return state.mail;
    },
    addresses: state => {
      return Number.isNaN(state.addressLists * 100) ? 0 : state.addressLists * 100;
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
      let people = 0;
      if (Number.isInteger(state.addressLists * 100)) {
         people = state.addressLists * 100
      }
      state.mail += (people * state.clickMultiplier);
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
  }
});
