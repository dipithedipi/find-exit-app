<template>
    <div class="pt-1">
        <button v-if="!alreadyLogged()" @click="login()" type="button"
            class="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
            <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                </path>
            </svg>Sign in<div></div>
        </button>
        <div v-else class="pr-2">
            <div class="bg-base-200 w-full">
                <div class="bg-base-100">
                    <div class="flex-none">
                        <div class="dropdown dropdown-end">
                            <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 h-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" :src="user.picture" />
                                </div>
                                <!-- <div>
                                {{ user.displayName }}
                            </div> -->
                            </div>
                            <ul tabindex="0"
                                class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32 border-2 border-gray-700">
                                <li><a @click="logout()" class="py-2 hover:text-red-700">
                                    <span class="material-symbols-outlined">
                                        logout
                                    </span>
                                    <div>
                                        Logout
                                    </div>
                                </a></li>
                            </ul>
                        </div>
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
            user: null
        }
    },
    methods: {
        async login() {
            console.log('login')
            let res = await fetch('http://localhost:3000/auth/user', {
                method: 'GET',
                credentials: "include",
            })
            if (res.ok) {
                let data = await res.json()
                console.log(data)
                this.user = data
                localStorage.setItem('user', JSON.stringify(this.user))
            } else {
                localStorage.removeItem('user')
                window.location = 'http://localhost:3000/auth/google'
            }
        },

        logout() {
            fetch('http://localhost:3000/auth/logout', {
                method: 'GET',
                credentials: "include",
            })
            this.user = null
            localStorage.removeItem('user')
            this.$router.push('/welcome')
        },

        alreadyLogged() {
            return this.user != null;
        }
    },
    mounted() {
        fetch('http://localhost:3000/auth/user', {
            method: 'GET',
            credentials: "include",
        }).then(res => {
            if (res.ok) {
                res.json().then(data => {
                    this.user = data
                    localStorage.setItem('user', JSON.stringify(this.user))
                })
            } else {
                localStorage.removeItem('user')
            }
        })
    }
}
</script>
