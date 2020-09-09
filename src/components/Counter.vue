<template>
  <div id="counter-container" class="text-gray-800 grid grid-cols-3 gap-4">
    <div id="mail-counter" class="flex flex-col justify-center">
      <div class="font-bold text-center">Mails Sent:</div>
      <div class="text-center">{{ spamSent }}</div>
    </div>
    <div id="rate-counter" class="flex flex-col justify-center">
      <div class="font-bold text-center">$$$ Per Second:</div>
      <div class="text-center">{{ rate }}</div>
    </div>
    <div id="money-counter" class="flex flex-col justify-center">
      <div class="font-bold text-center">Cash Avaliable:</div>
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