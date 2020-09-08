<template>
  <!-- Each batch of mail sent out hits more people (e.g. address lists) -->
  <div id="outreach-container">
    <div v-for="(item, i) in items" :key="i">
      <OutreachItem class="my-4" :item="item" />
    </div>
  </div>
</template>

<script>
import OutreachItem from "./OutreachItem.vue";

export default {
  components: {
    OutreachItem,
  },
  data() {
    return {
      items: this.$store.state.outreach,
    };
  },
  computed: {},
  methods: {},
};
</script>