<template>
    <v-app>
        <TheHeader />
        <nuxt />
    </v-app>
</template>

<script>

import TheHeader from '~/components/Header'

export default {
     components: {
        TheHeader
     }
}
</script>