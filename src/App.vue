<template>
  <Navbar_frontend />

  <main class="min-h-screen">
    <router-view />
  </main>
  <footer_frontend />
</template>

<script setup>
import Navbar_frontend from "./components/Navbar_frontend.vue";
import footer_frontend from "./footer/index.vue";
import DataExample from  "../src/views/components/DataExample.vue"
</script>

<style lang="scss" scoped></style>
