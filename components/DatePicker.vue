<template>
    <div class="date-picker">
        <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
        >
            <template v-slot:activator="{ on }">
                <v-text-field
                    v-model="date"
                    label="Select a month"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-on="on"
                />
            </template>
            <v-date-picker
                :value="date"
                @click:month="onDateSelected"
                type="month"
                no-title
                scrollable
            ></v-date-picker>
        </v-menu>
    </div>
</template>

<script>
export default {
    props: ['value'],

    data() {
        return {
            date: this.value || new Date().toISOString().substr(0, 7),
            menu: false,
            modal: false
        }
    },

    watch: {
        value(nv) {
            this.date = nv
        }
    },

    methods: {
        onDateSelected(date) {
            this.$refs.menu.save(date)
            this.$emit('input', date)
        }
    }
}
</script>
