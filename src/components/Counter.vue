<template>
  <div id="counter-container" class="grid grid-cols-3 space-x-4">
    <div id="mail-counter">
      <div class="font-bold text-center">Mails Sent</div>
      <div class="text-center">{{ spamSent }}</div>
    </div>
    <div id="rate-counter">
      <div class="font-bold text-center">$$$ Per Second</div>
      <div class="text-center">{{ rate }}</div>
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
    rate() {
      const rate = (this.$store.state.mail / 1000) * this.$store.state.moneyPerBatch
      if (rate < 0.01) {
        return '< $0.01';
      } else {
        return '$' + rate.toFixed(2);
      }
    },
    moneyMade() {
      return this.$store.state.money;
    },
  },
};
</script>

<style scoped>
</style>