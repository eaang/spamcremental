<template>
  <div id="mail-container" class="mx-auto w-2/3 text-center py-4 space-y-4">
    <div class="text-2xl font-bold">TIME TO MAKE MONEY</div>
    <div
      id="send-mail"
      class="noselect w-4/5 md:w-3/5 lg:w-1/3 mx-auto py-4 text-lg font-bold text-white bg-red-500 hover:bg-red-600 cursor-pointer rounded-full"
      @click="sendSpam"
    >
      SEND SPAM
      <font-awesome-icon icon="mail-bulk" />
    </div>
    <div id="current-status">
      Each batch of spam goes out to <span class="font-bold">{{ people }}</span>.
      <br />
      You're automatically sending <span class="font-bold">{{ perSecond }}</span>.
      <br />
      Your emails generate about <span class="font-bold">${{ currentRate.toFixed(2) }} per second for every 1000</span> sent out.
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
    perSecond() {
      if (this.$store.state.mailPerSecond === 1) {
        return '1 mail per second'
      } else {
        return this.$store.state.mailPerSecond + ' mails per second'
      }
    }
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
    ...mapActions(["makeMoney", "autoMoney"]),
  },
  created() {
    this.makeMoney();
    this.autoMoney();
  },
};
</script>

<style>
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>