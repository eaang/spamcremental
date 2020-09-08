import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Basic mail stuff below
export default new Vuex.Store({
  state: {
    mail: 0,
    money: 0,
    moneyPerBatch: 0.1,
    conversion: 100,
    clickMultiplier: 1,
    moneyMultiplier: 1,
    conversionMultiplier: 1,
    addresses: 1,
    addressesCost: .1,
    noMoney: false,
  },
  getters: {},
  mutations: {
    sendSpam(state) {
      // mutate state
      state.mail += state.addresses;
    },
    makeMoney(state) {
      const currentRate = (state.mail / state.conversion) * state.moneyPerBatch;
      state.money += currentRate;
    },
    buyAddresses(state, n) {
      const cost = (n * state.addressesCost);
      state.money -= cost;
      state.addresses += n;
    },
    raiseAddressesPrice(state) {
      const increase = state.addressesCost / 10;
      state.addressesCost += increase;
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
