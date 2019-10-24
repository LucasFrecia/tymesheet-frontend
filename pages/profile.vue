<template>
    <div>
        <h1>User Profile</h1>
        <nuxt-link to="/">home</nuxt-link>
        <hr />

        <pre>{{ $auth.user }}</pre>
    </div>
</template>

<script>
export default {}
</script>
