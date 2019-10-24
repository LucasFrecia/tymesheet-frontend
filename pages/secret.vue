<template>
    <div>
        <h1>Secret page</h1>
        <nuxt-link to="/">home</nuxt-link>
        <button @click="getTodos">Get Todos</button>
        <div v-if="todos">
            <hr />
            <pre>{{ todos }}</pre>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        todos: null
    }),

    methods: {
        async getTodos() {
            this.todos = await this.$axios.$get('/api/todos')
        }
    }
}
</script>
