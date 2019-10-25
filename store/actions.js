export async function getTimesheet({ state }) {
    state.timesheet = (await this.$axios.$get(
        '/api/months?month=201911&client=ING'
    ))[0]

    return state.timesheet
}
