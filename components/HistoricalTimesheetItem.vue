<template>
    <tr>
        <td>
            {{ item.id }}
        </td>
        <td>
            {{ item.client }}
        </td>
        <td>
            {{ item.month }}
        </td>
    </tr>
</template>

<script>
export default {
    props: ['item'],

    methods: {
        
    }
}
</script>