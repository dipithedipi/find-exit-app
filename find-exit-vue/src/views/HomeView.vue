<template>
  <div class="flex flex-col items-center justify-center pt-4 md:pt-16">
    <div class="shadow-md px-3 pt-6 mb-4 border-2 rounded-xl border-gray-700 flex flex-col md:flex-row items-center">
      <div class="flex flex-col sm:flex-row items-center space-x-4">
        <div class="pb-6 sm:pr-4">
          <img :src="user.picture.split('=')[0]" alt="Immagine del profilo" class="w-80 h-80 rounded-full">
        </div>
        <div class="pr-10">
          <div class="mb-4">
            <label class="block text-gray-600 text-md font-bold" for="username">
              Nome:
            </label>
            <p class="text-base">{{ user.displayName }}</p>
          </div>
          <div class="mb-4">
            <label class="block text-gray-600 text-md font-bold" for="email">
              Email:
            </label>
            <p class=" text-base">{{ user.email }}</p>
          </div>
          <div class="mb-4 grid grid-cols-2">
            <label class="block text-gray-600 text-md font-bold" for="email">
              Classe:
            </label>
            <p class="pl-16 text-base"> {{ classe }} </p>
          </div>
          <div class="mb-4 grid grid-cols-2">
            <label class="block text-gray-600 text-md font-bold" for="email">
              AULA ({{ getLessonHour() }}° ora):
            </label>
            <p class="pl-16 text-base"> {{ aula }} </p>
          </div>
          <div class="mb-4 grid grid-cols-2">
            <label class="block text-gray-600 text-md font-bold" for="email">
              Punto Di Raccolta:
            </label>
            <div :class="'badge pl-16'
            + (puntoDiRaccolta === '1'
            ? 'bg-red-500'
            : puntoDiRaccolta === '2'
              ? 'bg-pink-500'
              : puntoDiRaccolta === '3'
                ? 'bg-yellow-500'
                : puntoDiRaccolta === '4'
                  ? 'bg-green-500'
                  : puntoDiRaccolta === '5'
                    ? 'bg-blue-500'
                    : puntoDiRaccolta === '6'
                      ? 'bg-purple-500'
                      : 'bg-amber-600')">
              <p class="text-base"> {{ puntoDiRaccolta }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { accountCheck } from '@/utils/accountCheck.js';

export default {
  data() {
    return {
      rooms: [],
      user: JSON.parse(localStorage.getItem("user")),
      aula: "",
      userInfo: {},
      classe: "",
      puntoDiRaccolta: ""
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"))
    console.log('user', this.user)
    this.getLessonHour()
    this.getRoom()
  },
  methods: {
    getLessonHour() {
      const date = new Date()
      const hour = date.getHours()
      return hour - 7
    },
    getRoom() {
      let lessonHours = this.getLessonHour()
      let dayOfTheWeek = new Date().getDay()
      accountCheck().then(userInfo => {
        this.userInfo = userInfo
        fetch(`https://sipal.itispaleocapa.it/api/proxySipal/v1/studenti/aula/${dayOfTheWeek}/${lessonHours}/${userInfo.email}`, {
          method: 'GET',
          redirect: "follow",
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjA1NDg3NjgsImlhdCI6MTcxMDE4MDc2OCwiZGF0YSI6eyJ1c2VySWQiOiI2NWVmNDRjODNiNDIzN2RmMjQ4NjM3MDYiLCJlbWFpbCI6ImdhYnJpZWxlLmFyY3VyaUBpdGlzcGFsZW9jYXBhLml0IiwicGVybWlzc2lvbkxldmVsIjoxOH19.3k-n_jA559Xsbp5gDjXzw87MP6U07srQLAyt8y-v-7M"
          },
        }).then(response => {
          if (!response.ok) {
            return { aula: "Only for student" }
          }
          return response.json()
        }).then(data => {
          this.aula = data.aula
          fetch(`https://sipal.itispaleocapa.it/api/proxySipal/v1/studenti/classe/${dayOfTheWeek}/${lessonHours}/${this.aula}`, {
            method: 'GET',
            redirect: "follow",
            headers: {
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjA1NDg3NjgsImlhdCI6MTcxMDE4MDc2OCwiZGF0YSI6eyJ1c2VySWQiOiI2NWVmNDRjODNiNDIzN2RmMjQ4NjM3MDYiLCJlbWFpbCI6ImdhYnJpZWxlLmFyY3VyaUBpdGlzcGFsZW9jYXBhLml0IiwicGVybWlzc2lvbkxldmVsIjoxOH19.3k-n_jA559Xsbp5gDjXzw87MP6U07srQLAyt8y-v-7M"
            },
          }).then(response => {
            if (!response.ok) {
              return { classe: "Only for student" }
            }
            return response.json()
          }).then(data => {
            console.log("classe", data)
            this.classe = data.classe
            fetch("../../public/rooms.json")
              .then(response => response.json())
              .then(data => {
                this.rooms = data;
                for (let room of this.rooms) {
                  if (room.Name == this.aula) {
                    this.puntoDiRaccolta = room.PuntoDiRaccolta
                    break
                  } else {
                    this.puntoDiRaccolta = "Only for student"
                  }
                };
              })
          })
        })
      })
    }
  }
}
</script>