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
            } else {
                window.location = 'http://localhost:3000/auth/google'
            }
        },

        logout() {
            fetch('http://localhost:3000/auth/logout', {
                method: 'GET',
                credentials: "include",
            })
            this.user = null
        },

        alreadyLogged() {
            return this.user != null
        }
    },
    mounted() {
        
    }
}
<script>