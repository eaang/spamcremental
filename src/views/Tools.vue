<template>
  <div>
    <div class="tools-container mx-auto w-2/3 text-center py-4 space-y-4">
      <div class="text-2xl font-bold">BOOST THOSE EARNINGS</div>
      <div class="grid grid-cols-3 divide-x divide-gray-400">
        <div class="tools-link" @click="setCurrentTab('Outreach')">EMAIL ADDRESSES</div>
        <div class="tools-link" @click="setCurrentTab('Marketing')">MARKETING SKILLS</div>
        <div class="tools-link" @click="setCurrentTab('Technology')">TECH UPGRADES</div>
      </div>
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <component :is="currentTab"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import Marketing from "../components/Marketing.vue";
import Outreach from "../components/Outreach.vue";
import Technology from "../components/Technology.vue";

export default {
  data() {
    return {
      currentTab: "Outreach",
    };
  },
  components: {
    Marketing,
    Outreach,
    Technology,
  },
  methods: {
    setCurrentTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>

<style>
.tools-link {
  @apply font-bold cursor-pointer text-red-500;
}
.tools-link:hover {
  @apply underline text-red-600;
}
</style>