<template>
  <div>
    <div class="tools-container mx-auto w-2/3 text-center py-4 space-y-4">
      <div class="text-2xl font-bold">BOOST THOSE EARNINGS</div>
      <div class="grid grid-cols-3 divide-x divide-gray-400">
        <div
          :class="{ 'active-tab': outreachActive }"
          class="tools-link"
          @click="setCurrentTab('Outreach')"
        >EMAIL ADDRESSES</div>
        <div
          :class="{ 'active-tab': marketingActive }"
          class="tools-link"
          @click="setCurrentTab('Marketing')"
        >MARKETING SKILLS</div>
        <div
          :class="{ 'active-tab': techActive }"
          class="tools-link"
          @click="setCurrentTab('Technology')"
        >TECH UPGRADES</div>
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
      outreachActive: true,
      marketingActive: false,
      techActive: false,
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
      if (tab === "Outreach") {
        this.outreachActive = true;
        this.marketingActive = false;
        this.techActive = false;
      } else if (tab === "Marketing") {
        this.outreachActive = false;
        this.marketingActive = true;
        this.techActive = false;
      } else if (tab === "Technology") {
        this.outreachActive = false;
        this.marketingActive = false;
        this.techActive = true;
      }
    },
  },
};
</script>

<style>
.tools-link {
  @apply font-bold cursor-pointer text-red-400;
}
.tools-link:hover {
  @apply text-red-600;
}
.item-category-options {
  height: 0;
  transition: height 0.3s;
}
.active.item-category-options {
  height: 5em;
  transition: height 0.3s;
}
.active-tab {
  @apply text-red-600;
}
.active-tab:hover {
  @apply text-red-600;
}
</style>