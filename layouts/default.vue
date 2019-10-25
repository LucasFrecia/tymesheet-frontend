<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app>
            <v-list dense>
                <v-list-item @click>
                    <v-list-item-action>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dennis Bruijn</v-list-item-title>
                        <v-list-item-subtitle
                            >dennis.bruijn@sytac.io</v-list-item-subtitle
                        >
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click>
                    <v-list-item-action>
                        <v-icon>mdi-calendar</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Timesheets</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click>
                    <v-list-item-action>
                        <v-icon>mdi-history</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>History</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click>
                    <v-list-item-action>
                        <v-icon>mdi-lifebuoy</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Help</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="indigo" dark>
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>Sytac timesheets</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container align="start" fluid>
                <nuxt />
            </v-container>
        </v-content>
        <v-footer color="indigo" app>
            <span class="white--text">&copy; Sytac timesheets 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
import TheHeader from '~/components/Header'

export default {
    props: {
        source: String
    },

    components: {
        TheHeader
    },

    data: () => ({
        drawer: null
    })
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
