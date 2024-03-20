<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GoogleLogin from './components/GoogleLogin.vue';
</script>

<template>
  <nav class="navbar absolute bg-base-300">
    <div class="flex-1">
      <RouterLink class="btn btn-ghost text-xl" to="/">
        Exit Finder
      </RouterLink>

      <div v-if="alreadyLogged()">
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
    </div>

    <div class="flex-none gap-2">
      <div v-if="$route.path != '/welcome'">
        <GoogleLogin />
      </div>
    </div>
  </nav>

  <div v-if="$route.path == '/welcome'">
    <main class="flex justify-center">
      <div class="w-full">
        <RouterView />
      </div>
    </main>
  </div>

  <div v-else>
    <main class="flex justify-center pt-[4.5rem]">
      <div class="w-full">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user"))
    }
  },
  watch: {
    $route() {
      this.user = null
      if (JSON.parse(localStorage.getItem('user'))) {
        this.user = JSON.parse(localStorage.getItem('user'))
      }
    }
  },
  computed: {
    ...mapGetters(['user', 'isLoggedIn'])
  },
  methods: {
    alreadyLogged() {
      return this.user != null;
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"))
  }
}
</script>