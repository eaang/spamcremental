import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Basic mail stuff below
const store = new Vuex.Store({
  state: {
    mail: 0,
    mailPerSecond: 0, 
    money: 50,
    people: 1,
    moneyPerBatch: 0.01,
    clickMultiplier: 1,
    marketing: {
      persuasion: {
        name: "Persuasion",
        description: "More than a Jane Austen novel.",
        startingVal: 1,
        multiplier: 0.01,
        price: 1
      },
      graphicdesign: {
        name: "Graphic Design",
        description: "It's my passion.",
        startingVal: 0,
        multiplier: 0.05,
        price: 5
      },
      grammar: {
        name: "Good Grammar",
        description: "Not just for nazis.",
        startingVal: 0,
        multiplier: 0.1,
        price: 10
      }
    },
    outreach: {
      addresses: {
        name: "Email Addresses",
        description: "Every spampire has to start somewhere.",
        startingVal: 1,
        multiplier: 1,
        price: 1
      },
      mailingLists: {
        name: "Mailing Lists",
        description:
          "A journey of a thousand emails begins with one mailing list.",
        startingVal: 0,
        multiplier: 100,
        price: 100
      }
    },
    technology: {
      autoclicker: {
        name: "Autoclicker",
        description: "Sure you don't already have this?",
        startingVal: 0,
        multiplier: 1,
        price: 1
      }
    },
    noMoney: false
  },
  getters: {},
  mutations: {
    sendSpam(state) {
      // mutate state
      state.mail += state.people * state.clickMultiplier;
    },
    makeMoney(state) {
      const currentRate = (state.mail / 1000) * state.moneyPerBatch;
      state.money += currentRate;
    },
    autoMoney(state) {
      state.mail += state.mailPerSecond;
    },
    offAlert(state) {
      state.noMoney = false;
    },
    loadState(state, newState) {
      this.replaceState(newState);
    }
  },
  actions: {
    makeMoney({ commit }) {
      setInterval(() => {
        commit("makeMoney");
      }, 1000);
    },
    autoMoney({ commit }) {
      setInterval(() => {
        commit("autoMoney");
      }, 1000);
    },
    moneyStatus({ commit }) {
      setTimeout(() => {
        commit("offAlert");
      }, 1000);
    }
  }
});

export default store;
