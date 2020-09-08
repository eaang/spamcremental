// initial state
const state = () => ({
  addressLists: 0,
  addressListsCost: 10
});

// getters
const getters = {
  addressLists: state => {
    return state.addressLists;
  },
  listPrice: (state) => {
    return state.addressListsCost;
  }
};

// mutations
const mutations = {
  buyLists(state, n) {
    state.addressLists += n;
  },
  raiseListPrice(state) {
    const increase = state.addressListsCost / 10;
    state.addressListsCost += increase;
  }
};

// actions
const actions = {};

export default {
  state,
  getters,
  actions,
  mutations
};
