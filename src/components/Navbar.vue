<template>
  <div class="bg-gray-400 text-black">
    <div id="nav" class="container mx-auto py-4 flex flex-wrap justify-between items-center">
      <div id="links" class="w-full lg:w-1/2 xl:w-1/3 grid grid-cols-3 gap-4">
        <router-link class="text-center hover:font-bold px-2 py-1" to="/" exact>Send Spam</router-link>
        <router-link class="text-center hover:font-bold px-2 py-1" to="/upgrades">Buy Upgrades</router-link>
        <router-link class="text-center hover:font-bold px-2 py-1" to="/settings">Settings</router-link>
      </div>
      <hr class="block lg:hidden my-4 border-gray-600 w-full">
      <Counter class="w-full lg:w-1/2  xl:w-1/3" />
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
.router-link-active {
  @apply font-bold;
}
</style>