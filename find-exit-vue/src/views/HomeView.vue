<template>
  <main>
    <div class="pl-5">
      NAME: {{ user.displayName }}
      <br>
      EMAIL: {{ user.email }}
      <br>
      CLASSE:
      <br>
      PUNTO DI RACCOLTA:
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user"))
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"))
    console.log('user', this.user)
  }
}
</script>