<template>
  <!-- Each batch of mail sent out hits more people (e.g. address lists) -->
  <div id="outreach-container">
    <div class="item-container">
      <div id="address-lists" class="item-category">
        <div
          class="item-category-title bg-gray-600 text-white font-bold py-2 px-4 flex justify-between items-center"
        >
          <div class="flex flex-wrap">
            <div class="mr-4">[{{ addresses }}] EMAIL ADDRESSES</div>
            <div class="item-category-description font-normal italic">New victims to spam.</div>
          </div>
          <font-awesome-icon icon="chevron-up" />
        </div>

        <ul
          class="item-category-options cursor-pointer bg-gray-400 grid text-gray-600 font-bold grid-cols-1 md:grid-cols-3"
        >
          <li
            @click="plusEmail(1)"
            class="hover:bg-gray-500 hover:text-white py-4"
          >BUY 1 ADDRESS (${{ listPrice(1) }})</li>
          <li
            @click="plusEmail(10)"
            class="hover:bg-gray-500 hover:text-white py-4"
          >BUY 10 ADDRESS (${{ listPrice(10) }})</li>
          <li
            @click="plusEmail(100)"
            class="hover:bg-gray-500 hover:text-white py-4"
          >BUY 100 ADDRESS (${{ listPrice(100) }})</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  computed: {
    addresses() {
      return this.$store.state.addresses;
    },
  },
  methods: {
    ...mapMutations(["buyAddresses", "raiseAddressesPrice"]),
    ...mapActions(["moneyStatus"]),
    listPrice(n) {
      return (this.$store.state.addressesCost * n).toFixed(2);
    },
    plusEmail(n) {
      const cost = this.listPrice(n);
      if (this.$store.state.money - cost >= 0) {
        this.buyAddresses(n);
      } else {
        this.$store.state.noMoney = true;
        this.moneyStatus();
      }
    },
  },
};
</script>