export default async function getTimesheet({ state }) {
    state.timesheet = this.$axios.$get('/api/months?month=201911&client=ING')
}
