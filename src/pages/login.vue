<template>
    <div style="">
        <h1>Login</h1>

        <hr />

        <form @submit.prevent="login">
            <v-text-field v-model="username" label="username" /><br />
            <v-text-field v-model="password" label="password" /><br />
            <pre v-if="login_error" style="color: red;">{{ login_error }}</pre>
            <v-btn @click="login">login</v-btn>
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
