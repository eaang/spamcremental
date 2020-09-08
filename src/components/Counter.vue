<template>
  <div id="counter-container" class="grid grid-cols-2">
    <div id="mail-counter">
      <div class="font-bold text-center">Mails Sent</div>
      <div class="text-center">{{ spamSent }}</div>
    </div>
    <div id="money-counter">
      <div class="font-bold text-center">Cash Avaliable</div>
      <div class="text-center">${{ moneyMade.toFixed(2) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    spamSent() {
      return this.$store.state.mail;
    },
    moneyMade() {
      return this.$store.state.money;
    },
  },
};
</script>

<style scoped>
</style>