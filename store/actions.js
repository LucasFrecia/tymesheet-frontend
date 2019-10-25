export async function getTimesheet({ state }, { date, client }) {
    state.timesheet = (await this.$axios.$get(`/api/months`, {
        search: { date, client }
    }))[0]
    // `/api/months?month=${date}&client=${client}`,

    return state.timesheet
}
