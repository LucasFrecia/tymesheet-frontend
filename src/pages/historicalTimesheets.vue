<template>
    <div>
        <v-container>
            <h1>{{ title }}</h1>
            <br />
            <v-simple-table class="elevation-1">
                <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">ID</th>
                        <th class="text-left">Client</th>
                        <th class="text-left">Month</th>
                    </tr>
                </thead>
                <tbody>
                    <HistoricalTimesheetItem :item="item" v-for="item in timesheets" :key="item.id"/>
                </tbody>
                </template>
            </v-simple-table>
        </v-container>
    </div>
</template>

<script>
import HistoricalTimesheetItem from '~/components/HistoricalTimesheetItem'

export default {
    components: {
        HistoricalTimesheetItem
    },

    data: () => ({
        title: 'My Timesheets'
    }),

    created() {
        this.$store.dispatch("getHistoricalTimesheets")
    },

    computed: {
        timesheets() {
            return this.$store.state.history
        }
    }
}
</script>