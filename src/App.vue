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
      <router-view />
    </div>
  </div>
</template>

<style>
</style>
