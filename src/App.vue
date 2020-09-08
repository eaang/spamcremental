<template>
  <div id="app">
    <div id="nav" class="border-b border-black">
      <div class="container mx-auto py-4 space-x-4">
        <router-link to="/">Send Spam</router-link>
        <router-link to="/tools">Buy Tools</router-link>
        <router-link to="/settings">Settings</router-link>
      </div>
    </div>
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

<style>
:root {
  --animate-duration: 0.2s;
}
</style>
