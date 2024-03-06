<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Googlelogin from './components/GoogleLogin.vue'
</script>

<template>
  <nav class="navbar bg-base-300">
    <div class="flex-1">
      <RouterLink class="btn btn-ghost text-xl" to="/">
        Exit Finder
      </RouterLink>

      <ul class="menu menu-horizontal px-1">
        <li>
          <RouterLink to="/about">
            About
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="flex-none gap-2">
      <div>
        <Googlelogin />
      </div>
    </div>
  </nav>

  <main class="flex justify-center mt-4">
    <div class="w-4/5">
    <RouterView />
    </div>
  </main>
</template>