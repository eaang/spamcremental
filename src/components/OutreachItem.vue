<template>
  <div>
    <div class="item-container">
      <div class="item-category">
        <div
          class="item-category-title bg-gray-600 text-white font-bold py-2 px-4 flex justify-between items-center"
        >
          <div class="flex flex-wrap">
            <div class="mr-4">{{ item.name }}</div>
            <div class="item-category-description font-normal italic text-left">{{ item.description }}</div>
          </div>
          <font-awesome-icon icon="chevron-up" />
        </div>

        <div class="item-statistics grid grid-cols-1 sm:grid-cols-2 bg-gray-600 text-white py-2">
          <div class="px-4 text-left sm:text-center">Per item: {{ item.multiplier }} email addresses</div>
          <div class="px-4 text-left sm:text-center">Owned: {{ item.startingVal }}</div>
        </div>

        <ul
          class="item-category-options cursor-pointer bg-gray-400 grid text-gray-600 font-bold grid-cols-1 md:grid-cols-3"
        >
          <li
            @click="buyItem(1)"
            class="hover:bg-gray-500 hover:text-white py-4"
          >BUY 1 (${{ getPrice(1) }})</li>
          <li
            @click="buyItem(10)"
            class="hover:bg-gray-500 hover:text-white py-4"
          >BUY 10 (${{ getPrice(10) }})</li>
          <li
            @click="buyItem(100)"
            class="hover:bg-gray-500 hover:text-white py-4"
          >BUY 100 (${{ getPrice(100) }})</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  props: ["item"],
  methods: {
    ...mapMutations(["buyThing"]),
    ...mapActions(["moneyStatus"]),
    getPrice(n) {
      if (n % 1 !== 0) {
        return this.item.price * n;
      } else {
        return (this.item.price * n).toFixed(2);
      }
    },
    buyItem(n) {
      const cost = this.item.price * n;
      if (this.$store.state.money < cost) {
        this.$store.state.noMoney = true;
        this.moneyStatus();
      } else {
        this.item.startingVal += n;
        this.item.price += (this.item.startingVal / 100);
        this.$store.state.people += n * this.item.multiplier;
        this.$store.state.money -= cost;
      }
    },
  },
};
</script>

<style scoped>
</style>