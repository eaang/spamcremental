<template>
  <div class="bg-gray-400 text-black">
    <div id="nav" class="container mx-auto py-4 flex justify-between items-center">
      <div id="links" class="space-x-4">
        <router-link to="/">Send Spam</router-link>
        <router-link to="/tools">Buy Tools</router-link>
        <router-link to="/settings">Settings</router-link>
      </div>
      <Counter />
    </div>
  </div>
</template>

<script>
import Counter from "./Counter.vue";
export default {
  components: {
    Counter,
  },
};
</script>

<style scoped>
</style>