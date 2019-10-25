<template>
    <div class="d-flex align-center" v-if="$auth.loggedIn">
        <v-navigation-drawer v-model="$store.state.sidenav.open" app>
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
                        <v-list-item-title
                            ><nuxt-link to="/secret"
                                >Timesheets</nuxt-link
                            ></v-list-item-title
                        >
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
    </div>
    <div v-else></div>
</template>

<script>
export default {}
</script>

<style></style>
