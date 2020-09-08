<template>
  <div>
    <div class="item-container">
      <div class="item-category">
        <div
          class="item-category-title bg-gray-600 text-white font-bold pt-2 px-4 flex justify-between items-center"
        >
          <div class="flex flex-wrap">
            <div class="mr-4">{{ item.name }} ({{ item.startingVal }})</div>
            <div
              class="item-category-description font-normal italic text-left"
            >{{ item.description }}</div>
          </div>
          <font-awesome-icon icon="chevron-up" />
        </div>

        <div class="item-statistics bg-gray-600 text-white pb-2">
          <div class="px-4 text-left">{{ multiplier }}</div>
        </div>

        <ul
          class="item-category-options cursor-pointer bg-gray-400 grid text-gray-600 font-bold grid-cols-1 md:grid-cols-3"
        >
          <li @click="buyItem(1)" class="hover:bg-gray-500 hover:text-white py-4">TRAIN 1 LEVEL (${{ getPrice(1) }})</li>
          <li @click="buyItem(10)" class="hover:bg-gray-500 hover:text-white py-4">TRAIN 10 LEVELS (${{ getPrice(10) }})</li>
          <li @click="buyItem(100)" class="hover:bg-gray-500 hover:text-white py-4">TRAIN 100 LEVELS (${{ getPrice(100) }})</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["item"],
  computed: {
    multiplier() {
      return (
        "Each level generates an additional $" +
        this.item.multiplier.toFixed(2) +
        " per second."
      );
    },
  },
  methods: {
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
        this.item.price += this.item.startingVal / 1000;
        this.$store.state.moneyPerBatch += n * this.item.multiplier;
        this.$store.state.money -= cost;
      }
    },
  },
};
</script>

<style scoped>
</style>