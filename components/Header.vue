<template>
    <div class="d-flex align-center" v-if="$auth.loggedIn">
        <div class="v-toolbar__title">
            {{ $auth.user.username }}
        </div>
        <v-menu left bottom>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item>
                    <v-list-item-title @click="() => {}">
                        <nuxt-link class="no-link-style" to="/">Home</nuxt-link>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title @click="() => {}">
                        <nuxt-link class="no-link-style" to="public">Public</nuxt-link>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title @click="() => {}">
                        <nuxt-link class="no-link-style" to="secret">Secret</nuxt-link>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title @click="() => {}">
                        <nuxt-link class="no-link-style" to="profile">Profile</nuxt-link>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title @click="() => {}">
                        <nuxt-link class="no-link-style" to="timesheet/timesheet-new">New Timesheet</nuxt-link>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <button @click="$auth.logout()">Logout</button>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
    <div v-else></div>
</template>
                        
<script>
export default {}
</script>

<style>
    .no-link-style {
        text-decoration: inherit;
        color: inherit;
        cursor: auto;
    }

    .no-link-style:visited {
        text-decoration: inherit;
        color: inherit;
        cursor: auto;
    }
</style>
