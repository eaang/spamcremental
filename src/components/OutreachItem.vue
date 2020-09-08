<template>
  <div>
    <div class="item-container">
      <div class="item-top">
        <div
          class="item-category-title bg-gray-600 text-white font-bold pt-2 px-4 flex justify-between items-center"
        >
          <div class="flex flex-wrap">
            <div class="mr-4">{{ item.name }} ({{ item.startingVal }})</div>
            <div
              class="item-category-description font-normal italic text-left"
            >{{ item.description }}</div>
          </div>
          <font-awesome-icon
            v-if="isShown"
            class="cursor-pointer"
            @click="isShown = !isShown"
            icon="chevron-up"
          />
          <font-awesome-icon
            v-else
            class="cursor-pointer"
            @click="isShown = !isShown"
            icon="chevron-down"
          />
        </div>

        <div class="item-statistics bg-gray-600 text-white pb-2">
          <div class="px-4 text-left">{{ multiplier }}</div>
        </div>
      </div>

      <ul
        :class="{ 'active': isShown }"
        class="item-category-options overflow-hidden cursor-pointer bg-gray-400 grid text-gray-600 font-bold grid-cols-1 md:grid-cols-3"
      >
        <li @click="buyItem(1)" class="hover:bg-gray-500 hover:text-white py-4">
          BUY 1 ITEM
          <br />
          (${{ getPrice(1) }})
        </li>
        <li @click="buyItem(10)" class="hover:bg-gray-500 hover:text-white py-4">
          BUY 10 ITEMS
          <br />
          (${{ getPrice(10) }})
        </li>
        <li @click="buyItem(100)" class="hover:bg-gray-500 hover:text-white py-4">
          BUY 100 ITEMS
          <br />
          (${{ getPrice(100) }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["item"],
  data() {
    return {
      isShown: true,
    };
  },
  computed: {
    multiplier() {
      if (this.item.multiplier === 1) {
        return "Get 1 address per item.";
      } else {
        return "Get " + this.item.multiplier + " addresses per item.";
      }
    },
  },
  methods: {
    ...mapActions(["moneyStatus"]),
    getPrice(n) {
      return (this.item.price * n).toFixed(2);
    },
    buyItem(n) {
      const cost = this.item.price * n;
      if (this.$store.state.money < cost) {
        this.$store.state.noMoney = true;
        this.moneyStatus();
      } else {
        this.item.startingVal += n;
        this.item.price += this.item.startingVal / 1000;
        this.$store.state.people += n * this.item.multiplier;
        this.$store.state.money -= cost;
      }
    },
  },
};
</script>

<style>
</style>