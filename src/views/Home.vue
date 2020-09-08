<template>
  <div id="mail-container" class="mx-auto w-2/3 text-center py-4 space-y-4">
    <div class="text-2xl font-bold">TIME TO MAKE MONEY</div>
    <div
      id="send-mail"
      class="w-4/5 md:w-3/5 lg:w-1/3 mx-auto py-4 text-lg font-bold text-white bg-red-500 hover:bg-red-600 cursor-pointer rounded-full"
      @click="sendSpam"
    >
      SEND SPAM
      <font-awesome-icon icon="mail-bulk" />
    </div>
    <div id="current-status">
      Each batch of spam hits {{ people }}.
      <br />
      You're making about ${{ currentRate.toFixed(2) }} per second for every 1000 spam mails sent.
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";

export default {
  name: "Home",
  computed: {
    people() {
      if (this.$store.state.people === 1) {
        return "1 person";
      } else {
        return this.$store.state.people + " people";
      }
    },
    currentRate() {
      return this.$store.state.moneyPerBatch;
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