<template>
    <v-select
        class="client-picker"
        :value="value"
        :items="clients"
        label="Select your client"
        @input="onClientSelected"
    />
</template>

<script>
export default {
    props: ['value'],
    
    data: () => ({
        clients: ["Backbase", "ING", "KLM"]
    }),

    methods: {
        onClientSelected(client) {
            this.$emit('input', client);
        }
    }
}
</script>