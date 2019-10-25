<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="items"
            :items-per-page="5"
            class="elevation-1"
        >
        </v-data-table>
    </div>
</template>

<script>
export default {
    data: () => ({
        items: [],
        headers: [
            { text: 'date' },
            { text: 'worked' },
            { text: 'internal_hours' },
            { text: 'courses' },
            { text: 'leave' },
            { text: 'sick' },
            { text: 'doctor' }
            // { text: 'special_leave' },
            // { text: 'part_time_leave' },
            // { text: 'overtime_from' },
            // { text: 'overtime_to' },
            // { text: 'standby' }
        ]
    })
}
</script>
