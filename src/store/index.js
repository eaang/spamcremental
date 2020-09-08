import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Basic mail stuff below
export default new Vuex.Store({
  state: {
    mail: 0,
    money: 100,
    people: 1,
    moneyPerBatch: 0.1,
    conversion: 100,
    clickMultiplier: 1,
    moneyMultiplier: 1,
    conversionMultiplier: 1,
    outreach: {
      addresses: {
        name: 'Email Addresses',
        description: 'Every spampire has to start somewhere.',
        startingVal: 1,
        multiplier: 1,
        price: 1
      },
      mailingLists: {
        name: 'Mailing Lists',
        description: 'A journey of a thousand emails begins with one mailing list.',
        startingVal: 0,
        multiplier: 100,
        price: 100
      }
    },
    noMoney: false
  },
  getters: {},
  mutations: {
    sendSpam(state) {
      // mutate state
      state.mail += state.people;
    },
    makeMoney(state) {
      const currentRate = (state.mail / state.conversion) * state.moneyPerBatch;
      state.money += currentRate;
    },
    offAlert(state) {
      state.noMoney = false;
    }
  },
  actions: {
    makeMoney({ commit }) {
      setInterval(() => {
        commit("makeMoney");
      }, 1000);
    },
    moneyStatus({ commit }) {
      setTimeout(() => {
        commit("offAlert");
      }, 1000);
    }
  }
});
