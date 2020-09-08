<template>
  <div id="app" class="h-screen relative">
    <Navbar />
    <Alerts class="absolute bottom-0" />
    <div class="container mx-auto">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Alerts from "./components/Alerts.vue";
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
    Alerts
  },
};
</script>
<style>
:root {
  --animate-duration: 0.2s;
}
</style>
