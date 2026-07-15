<template>
  <footer
    class="bg-gradient-to-r from-emerald-600 to-green-500 text-white px-6 py-5 shadow-inner"
  >
    <div
      class="flex flex-col items-center justify-between gap-3 md:flex-row"
    >
      <div>
        <h2 class="font-bold text-lg">
          Vue3 Learn
        </h2>
        <p class="text-sm text-white/70">
          Composition API Practice
        </p>
      </div>

      <div class="text-sm">
        <a
          href="https://souphakone-kp.github.io/souphakone_keopheth_website_portfolio/#/home"
          target="_blank"
          class="hover:text-white/70 transition"
        >
          Portfolio : https://souphakone-kp.github.io/souphakone_keopheth_website_portfolio/#/home
        </a>
      </div>

      <p class="text-sm text-white/70">
        © {{ new Date().getFullYear() }} Souphakone
      </p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>