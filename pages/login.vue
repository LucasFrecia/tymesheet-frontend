<template>
    <div>
        <h1>Login</h1>

        <hr />

        <form @submit.prevent="login">
            <label>username <input v-model="username"/></label><br />
            <label>password <input v-model="password"/></label><br />
            <pre v-if="login_error" style="color: red;">{{ login_error }}</pre>
            <button>login</button>
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        username: 'paul',
        password: 'test123',
        login_error: false
    }),

    methods: {
        login() {
            this.login_error = false
            this.$auth
                .loginWith('local', {
                    data: {
                        username: this.username,
                        password: this.password
                    }
                })
                .catch(e => {
                    this.login_error = e
                })
        }
    }
}
</script>
