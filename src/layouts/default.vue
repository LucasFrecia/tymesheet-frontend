<template>
    <v-app>
        <SideNav />

        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon
                @click.stop="$store.state.sidenav.open = !$store.state.sidenav.open"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>
                <img src="~/assets/logo.png" style="width: 100px;padding-top:8px;" />
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <TheHeader />
        </v-app-bar>

        <v-content>
            <v-container align="start" fluid>
                <nuxt />
            </v-container>
        </v-content>
        <v-footer color="primary" app>
            <span class="white--text">&copy; Sytac timesheets 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
import TheHeader from '~/components/Header'
import SideNav from '~/components/SideNav'

export default {
    props: {
        source: String
    },

    components: {
        TheHeader,
        SideNav
    }
}
</script>

<style>
.b1,
[b1] {
    border: 1px dashed red;
}
.b2,
[b2] {
    border: 1px dashed blue;
}
</style>
