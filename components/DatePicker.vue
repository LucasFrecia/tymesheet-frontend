<template>
    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="true"
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
            @input="onDateSelected"
            type="month"
            no-title
            scrollable
        ></v-date-picker>
    </v-menu>
</template>

<script>
export default {
    props: ['value'],
    
    data: () => ({
        date: new Date().toISOString().substr(0, 7),
        menu: false,
        modal: false
    }),

    methods: {
        onDateSelected(date) {
            this.$refs.menu.save(date);
            this.$emit('input', date);
        }
    }
}
</script>