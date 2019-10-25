<template>
    <div>
        <TheHeader />
        <nuxt />
    </div>
</template>

<script>

import TheHeader from '~/components/Header'

export default {
     components: {
        TheHeader
     }
}
</script>