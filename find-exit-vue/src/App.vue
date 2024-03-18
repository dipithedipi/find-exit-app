<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GoogleLogin from './components/GoogleLogin.vue';
</script>

<template>
  <nav class="navbar bg-base-300">
    <div class="flex-1">
      <RouterLink class="btn btn-ghost text-xl" to="/">
        Exit Finder
      </RouterLink>
      

      <ul class="menu menu-horizontal px-1">
        <li>
          <RouterLink to="/classrooms">
            Classrooms
          </RouterLink>
        </li>
      </ul>

      <ul class="menu menu-horizontal px-1">
        <li>
          <RouterLink to="/about">
            About
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="flex-none gap-2">
      <div v-if="$route.path != '/welcome'">
        <GoogleLogin />
      </div>
    </div>
  </nav>

  <main class="flex justify-center">
    <div class="w-full">
    <RouterView />
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['user', 'isLoggedIn'])
  }
}
</script>