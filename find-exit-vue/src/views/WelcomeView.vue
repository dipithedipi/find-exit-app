<script setup>
import GoogleLogin from '@/components/GoogleLogin.vue';
</script>

<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 v-if="!alreadyLogged()" class="text-5xl font-bold">Wait,<br> How are you?</h1>
                <h1 v-else class="text-5xl font-bold">Welcome back {{ user.email }}</h1>
                <p v-if="!alreadyLogged()" class="py-6">please sign-in to continue</p>
                <p v-else class="py-6">now you can start to use the app</p>
                <div v-if="alreadyLogged()">
                    <button class="btn btn-primary" 
                    @click="this.$router.push('/')"
                    > Continue </button>
                </div>
                <div v-else>
                    <GoogleLogin />
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
    methods: {
        alreadyLogged() {
            return localStorage.getItem('user') != null;
        }
    },
    mounted() {
        this.user = JSON.parse(localStorage.getItem("user"))
    }
}
</script>