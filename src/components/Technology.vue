<template>
  <!-- Each batch of mail sent out hits more people (e.g. address lists) -->
  <div id="technology-container">
    <div v-for="(item, i) in items" :key="i">
      <TechnologyItem class="my-4" :item="item" />
    </div>
  </div>
</template>

<script>
import TechnologyItem from "./TechnologyItem.vue";

export default {
  components: {
    TechnologyItem,
  },
  data() {
    return {
      items: this.$store.state.technology,
    };
  },
  computed: {},
  methods: {},
};
</script>