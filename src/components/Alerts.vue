<template>
  <div class="flex w-screen justify-center">
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div
        id="no-money"
        class="p-4 m-4 bg-red-400 text-white font-bold"
        v-if="noMoney"
      >You don't have enough money to buy this!</div>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    noMoney() {
      return this.$store.state.noMoney;
    },
  },
};
</script>

<style scoped>
</style>