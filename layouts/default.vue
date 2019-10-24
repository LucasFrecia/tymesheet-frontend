<template>
    <div>
        <h4 style="position: absolute; right: 20px; top: 10px;">
            <div v-if="$auth.loggedIn">
                User: {{ $auth.user.username }}<br />
                <button @click="$auth.logout()">logout</button>
            </div>
            <div v-else>
                <nuxt-link to="/login">login</nuxt-link>
            </div>
        </h4>
        <nuxt />

        <!-- <div v-if="$auth.user">
            <hr />
            <pre>{{ $auth.user }}</pre>
        </div>-->
    </div>
</template>
