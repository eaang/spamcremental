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
      Each batch of spam hits {{ addresses }}.
      <br />
      You're making about ${{ currentRate.toFixed(2) }} per second with every {{ conversionRate }} spam mails sent.
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";

export default {
  name: "Home",
  computed: {
    addresses() {
      if (this.$store.state.addresses === 1) {
        return "1 person";
      } else {
        return this.$store.state.addresses + " people";
      }
    },
    currentRate() {
      return this.$store.state.moneyPerBatch;
    },
    conversionRate() {
      return this.$store.state.conversion;
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