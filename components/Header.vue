<template>
    <div>
        <h4 style="position: absolute; right: 20px; top: 10px;">
            <div v-if="$auth.loggedIn">
                User: {{ $auth.user.username }}
                <br />
                <button @click="$auth.logout()">logout</button>
            </div>
            <div v-else>
                <nuxt-link to="/login">login</nuxt-link>
            </div>
        </h4>

        <nuxt-link to="/">home</nuxt-link>
        <nuxt-link to="public">public</nuxt-link>
        <nuxt-link to="secret">secret</nuxt-link>
        <nuxt-link to="profile">profile</nuxt-link>
        <nuxt-link to="timesheet/timesheet-new">New Timesheet</nuxt-link>
    </div>
</template>

<script>
export default {}
</script>

<style>
</style>