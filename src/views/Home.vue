<template>
  <div class="home">
    <div id="mail-container" class="mx-auto w-2/3 text-center py-4 space-y-4">
      <div id="mail-clicker">
        <div class="text-2xl font-bold mb-4">SPAM AWAY</div>
        <div
          id="send-mail"
          class="w-1/3 mx-auto py-4 text-lg font-bold text-white bg-red-500 hover:bg-red-600 cursor-pointer rounded-full"
          @click="sendSpam"
        >
          SEND SPAM
          <font-awesome-icon icon="mail-bulk" />
        </div>
      </div>
      <div
        id="earnings-counter"
      >Currently making ${{ currentRate }} per second for every {{ conversionRate }} spam mails sent.</div>
      <div id="counter-container" class="grid grid-cols-2">
        <div id="mail-counter">Spam Mails Sent: {{ spamSent }}</div>
        <div id="money-counter">Money Made: ${{ moneyMade }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";

export default {
  name: "Home",
  computed: {
    spamSent() {
      return this.$store.getters.spamSent;
    },
    moneyMade() {
      return this.$store.getters.moneyMade;
    },
    currentRate() {
      return this.$store.getters.currentRate;
    },
    conversionRate() {
      return this.$store.getters.conversionRate;
    },
  },
  methods: {
    sendSpam(event) {
      event.target.classList.add("animate__animated", "animate__headShake");
      event.target.addEventListener("animationend", () => {
        event.target.classList.remove(
          "animate__animated",
          "animate__headShake"
        );
      });
      this.$store.commit("sendSpam");
    },
    ...mapActions(["makeMoney"]),
  },
  created() {
    this.makeMoney();
  },
};
</script>

<style scoped>
.animate__animated.animate__headShake {
  --animate-duration: 0.25s;
}
</style>