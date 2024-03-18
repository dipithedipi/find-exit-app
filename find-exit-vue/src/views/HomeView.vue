<template>
  <main>
    <div>
      NAME: {{ user.displayName }}
      <br>
      EMAIL: {{ user.email }}
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
  methods: {
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"))
    console.log('user', this.user)
  }
}
</script>