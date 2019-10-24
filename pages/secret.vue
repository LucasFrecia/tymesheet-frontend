<template>
    <div>
        <h1>Secret page</h1>
        <nuxt-link to="/">home</nuxt-link>
        <button @click="getTodos">Get Todos</button>
        <div v-if="todos">
            <hr />
            <input v-model="title" @keyup.enter="addTodo(title)" />
            <pre>{{ todos }}</pre>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        todos: null,
        title: ''
    }),

    methods: {
        async getTodos() {
            this.todos = await this.$axios.$get('/api/todos')
        },

        async addTodo(title) {
            this.$axios
                .$post('/api/todos', { title, done: false })
                .then(d => {
                    this.$toast.success('Added new todo')
                    this.title = ''
                    this.todos.unshift(d)
                })
                .catch(e =>
                    this.$toast.error(e, `Well, that didn't go so well`, 5000)
                )
        }
    }
}
</script>
