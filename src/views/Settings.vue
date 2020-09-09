<template>
  <div class="mx-auto w-2/3 text-center py-4 space-y-4">
    <div class="text-2xl font-bold">SAVE / LOAD GAME</div>
    <div class="flex space-x-4 justify-center">
      <div class="w-64">
        <button
          id="create-save"
          class="w-full bg-gray-300 text-gray-800 font-bold"
          @click="createSave"
        >CREATE SAVE</button>
        <textarea class="w-full border border-gray-300" v-model="currentState"></textarea>
      </div>
      <div class="w-64">
        <button
          id="load-save"
          class="w-full bg-gray-300 text-gray-800 font-bold"
          @click="loadSave"
        >LOAD SAVE</button>
        <textarea class="w-full border border-gray-300" v-model="changeState"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      currentState: "",
      changeState: "",
    };
  },
  methods: {
    ...mapActions(["makeMoney", "autoMoney"]),
    ...mapMutations(["loadState"]),
    createSave() {
      const state = JSON.stringify(this.$store.state);
      this.currentState = state;
    },
    loadSave() {
      const newState = JSON.parse(this.changeState);
      this.loadState(newState);
      this.makeMoney();
      this.autoMoney();
    },
  },
};
</script>

<style scoped>
</style>
