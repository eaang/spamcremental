<template>
  <!-- Each batch of mail sent out hits more people (e.g. address lists) -->
  <div id="outreach-container">
    <div class="item-container">
      <div id="address-lists" class="item-category">
        <div
          class="item-category-title bg-gray-600 text-white font-bold py-2 px-4 flex justify-between items-center"
        >
          <div class="flex flex-wrap">
            <div class="mr-4">[{{ addressLists }}] ADDRESS LISTS</div>
            <div class="item-category-description font-normal italic">100 new addresses to spam.</div>
          </div>
          <font-awesome-icon icon="chevron-up" />
        </div>

        <ul
          class="item-category-options cursor-pointer bg-gray-400 grid text-gray-600 font-bold grid-cols-1 md:grid-cols-3 "
        >
          <li class="hover:bg-gray-500 hover:text-white py-4">BUY 1 LIST (${{ listPrice(1) }})</li>
          <li class="hover:bg-gray-500 hover:text-white py-4">BUY 10 LISTS (${{ listPrice(10) }})</li>
          <li class="hover:bg-gray-500 hover:text-white py-4">BUY 100 LISTS (${{ listPrice(100) }})</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    addressLists() {
      return this.$store.getters.addressLists;
    },
  },
  methods: {
    ...mapMutations(["buyLists", "raiseListPrice"]),
    listPrice(n) {
      return this.$store.getters.listPrice * n;
    },
  },
};
</script>