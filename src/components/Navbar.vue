<template>
  <div class="bg-gray-400 text-black">
    <div id="nav" class="container mx-auto py-4 flex flex-wrap justify-between items-center">
      <div id="links" class="w-full lg:w-1/2 xl:w-1/3 grid grid-cols-3 gap-4">
        <router-link class="nav-link" to="/" exact>Send Spam</router-link>
        <router-link class="nav-link" to="/upgrades">Buy Upgrades</router-link>
        <router-link class="nav-link" to="/settings">Settings</router-link>
      </div>
      <hr class="block lg:hidden my-4 border-gray-600 w-full" />
      <Counter class="w-full lg:w-1/2 xl:w-1/3" />
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
.nav-link {
  @apply text-center px-2 py-1 no-underline text-gray-700;
}
.nav-link:hover {
  @apply font-bold text-gray-800;
}
.router-link-active {
  @apply font-bold no-underline text-gray-800;
}
.router-link-active:hover {
  @apply font-bold no-underline;
}
</style>