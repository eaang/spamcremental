<template>
  <div id="mail-container" class="mx-auto w-2/3 text-center py-4 space-y-4">
    <div class="text-2xl font-bold">TIME TO MAKE MONEY</div>
    <div
      id="send-mail"
      class="w-1/3 mx-auto py-4 text-lg font-bold text-white bg-red-500 hover:bg-red-600 cursor-pointer rounded-full"
      @click="sendSpam"
    >
      SEND SPAM
      <font-awesome-icon icon="mail-bulk" />
    </div>
    <div id="current-status">
      Each batch of spam hits {{ addresses }} people.
      <br />
      You're making ${{ currentRate }} per second for every {{ conversionRate }} spam mails sent.
    </div>
    <div id="counter-container" class="grid grid-cols-2">
      <div id="mail-counter">
        <div class="font-bold">Mails Sent</div>
        <div>{{ spamSent }}</div>
      </div>
      <div id="money-counter">
        <div class="font-bold">Cash Avaliable</div>
        <div>${{ moneyMade }}</div>
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
    addresses() {
      return this.$store.getters.addresses;
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

<style>
</style>