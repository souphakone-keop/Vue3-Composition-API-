<template>
  <nav
    class="navbar bg-gradient-to-r from-emerald-600 to-green-500 text-white px-6 shadow-lg"
  >
    <div class="flex-1">
      <a class="flex items-center gap-3 cursor-pointer">
        <div
          class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur"
        >
          📘
        </div>

        <div>
          <RouterLink to="/">
            <h1 class="text-xl font-bold">Vue3 Learn</h1>

            <p class="text-xs text-white/70">Composition API</p>
          </RouterLink>
        </div>
      </a>
    </div>

    <div class="flex items-center gap-4">
      <label
        class="input bg-white/20 border-none backdrop-blur rounded-full w-64"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 opacity-70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          type="text"
          class="grow text-white placeholder:text-white/70"
          placeholder="Search..."
        />
      </label>

      <!-- Notification -->

      <button class="btn btn-ghost btn-circle">🔔</button>

      <!-- Avatar -->

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="avatar cursor-pointer">
          <div
            class="w-11 rounded-full ring ring-white ring-offset-2 ring-offset-green-500"
          >
            <img
              src="https://i.pinimg.com/736x/1a/29/15/1a29158618e486b7bb832c4ab808f2ad.jpg"
              alt="profile"
            />
          </div>
        </div>

        <ul
          tabindex="0"
          class="menu menu-md dropdown-content mt-4 w-60 rounded-2xl bg-base-100 text-base-content shadow-2xl"
        >
          <li class="menu-title">
            <span>Welcome 👋</span>
          </li>

          <li>
            <a
              href="https://souphakone-kp.github.io/souphakone_keopheth_website_portfolio/#/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              👤 Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
input::placeholder {
  color: rgba(255, 255, 255, 0.75);
}
</style>
