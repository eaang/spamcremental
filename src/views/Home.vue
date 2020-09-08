<template>
  <div class="home">
    <div id="mail-container" class="mx-auto w-1/3 text-center py-4 space-y-4">
      <div id="mail-clicker">
        <div class="text-lg font-bold">SPAM AWAY</div>
        <div id="send-mail" class="cursor-pointer text-6xl" @click="sendSpam">
          <font-awesome-icon icon="mail-bulk" />
        </div>
      </div>
      <div id="counter-container" class="grid grid-cols-2">
        <div id="mail-counter">Spam Sent: {{ spamSent }}</div>
        <div id="money-counter">Money Made: ${{ moneyMade }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  computed: {
    spamSent() {
      return this.$store.getters.spamSent;
    },
    moneyMade() {
      return this.$store.getters.moneyMade;
    },
  },
  methods: {
    sendSpam(event) {
      event.target.classList.add("animate__animated", "animate__headShake");
      event.target.addEventListener("animationend", () => {
        event.target.classList.remove("animate__animated", "animate__headShake");
      });
      this.$store.commit("sendSpam");
    },
  },
};
</script>

<style scoped>
.animate__animated.animate__headShake {
  --animate-duration: .25s;
}
</style>