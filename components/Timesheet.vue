<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="items"
            Xitems-per-page="15"
            class="elevation-1"
        >
        </v-data-table>
    </div>
</template>

<script>
export default {
    data: () => ({
        // items: [],
        headers: [
            { text: 'date', value: 'date' },
            { text: 'worked', value: 'worked' },
            { text: 'internal_hours', value: 'internal' },
            { text: 'courses', value: 'courses' },
            { text: 'leave', value: 'leave' },
            { text: 'sick', value: 'sick' },
            { text: 'doctor', value: 'doctor' }
            // { text: 'special_leave' },
            // { text: 'part_time_leave' },
            // { text: 'overtime_from' },
            // { text: 'overtime_to' },
            // { text: 'standby' }
        ]
    }),

    created() {
        this.$store.dispatch('getTimesheet')
    },

    computed: {
        items() {
            return this.$store.state.timesheet.timesheet
        }
    }
}
</script>
