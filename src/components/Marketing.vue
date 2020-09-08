<template>
  <!-- You get more money per mail sent out (e.g. conversion rate) -->
  <div id="marketing-container">
    <div v-for="(item, i) in items" :key="i">
      <MarketingItem class="my-4" :item="item" />
    </div>
  </div>
</template>

<script>
import MarketingItem from './MarketingItem.vue';
export default {
  components: {
    MarketingItem,
  },
  data() {
    return {
      items: this.$store.state.marketing,
    }
  },
};
</script>

<style scoped>
</style>
