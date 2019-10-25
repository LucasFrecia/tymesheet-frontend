<template>
    <div>
        <v-container class="grey lighten-5">
            <h1>{{ title }}</h1>
            <v-row>
                <v-col>
                    <div class="pickers">
                        <DatePicker
                            v-model="date"
                            @input="getTimesheet(date, client)"
                        />
                        <!-- Fix this using CSS -->
                        <div style="flex: 1;" />
                        <ClientPicker
                            v-model="client"
                            @input="getTimesheet(date, client)"
                        />
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <div style="flex: 1;">
                    <Timesheet />
                </div>
            </v-row>
            <v-row>
                <div class="buttons">
                    <v-btn @click="saveTimesheet">Save</v-btn>
                    <v-btn @click="submitTimesheet">Submit</v-btn>
                </div>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import DatePicker from '~/components/DatePicker'
import ClientPicker from '~/components/ClientPicker'
import Timesheet from '~/components/Timesheet'

export default {
    components: { DatePicker, ClientPicker, Timesheet },

    data: () => ({
        title: 'My Timesheets',
        date: null,
        client: null
    }),

    methods: {
        getTimesheet(date, client) {
            console.log('>>>', date, client)
            if (!date || !client) return
            this.$store.dispatch('getTimesheet', { date, client })
        },

        saveTimesheet() {
            console.log('save')
        },

        submitTimesheet() {
            console.log('submit')
        }
    },

    mounted() {
        this.getTimesheet()
    }
}
</script>

<style lang="scss" scoped>
.pickers {
    display: flex;
}

.buttons {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    margin-top: 16px;

    button + button {
        margin-left: 16px;
    }
}
</style>
