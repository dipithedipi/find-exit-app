<template>
  <div class="flex flex-col items-center justify-center pt-4 md:pt-16">
    <div
      class="shadow-md px-6 pt-6 mb-4 border-2 rounded-xl border-gray-700 flex flex-col md:flex-row items-center">
      <div class="flex flex-col sm:flex-row items-center space-x-4">
        <div class="pb-6 sm:pr-4">
          <img :src="user.picture" alt="Immagine del profilo" class="w-80 h-80 rounded-full">
        </div>
        <div class="pr-10">
          <div class="mb-4">
            <label class="block text-gray-600 text-md font-bold mb-2" for="username">
              Nome:
            </label>
            <p class="text-base">{{ user.displayName }}</p>
          </div>
          <div class="mb-6">
            <label class="block text-gray-600 text-md font-bold mb-2" for="email">
              Email:
            </label>
            <p class=" text-base">{{ user.email }}</p>
          </div>
          <div class="mb-6">
            <label class="block text-gray-600 text-md font-bold mb-2" for="email">
              Classe:
            </label>
            <p class=" text-base"> SCONOSCIUTO </p>
          </div>
          <div class="mb-6">
            <label class="block text-gray-600 text-md font-bold mb-2" for="email">
              Punto Di Raccolta:
            </label>
            <p class=" text-base"> SCONOSCIUTO </p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    this.getLessonHour()
  },
  methods: {
    getLessonHour() {
      const date = new Date()
      const hour = date.getHours()

      return hour-7
    },
    getRoom() {
      return null 
    },
    getPuntoDiRaccolta() {
     return null 
    }
  }
}
</script>