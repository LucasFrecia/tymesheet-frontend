<template>
    <div>
        <h1>{{ title }}</h1>
        <nuxt-link to="/">home</nuxt-link>
        <hr />
    </div>
</template>

<script>
export default {
    data: () => ({
        title: 'My Timesheets'
    }),
    methods: {
        async getTimesheet() {
            this.todos = await this.$axios
                .$get('https://jsonplaceholder.typicode.com/todos/1')
                .then(resp => console.log(resp))
        }
    },
    mounted: function mounted() {
        this.getTimesheet()
    }
}
</script>
