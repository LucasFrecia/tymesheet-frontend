export async function getTimesheet({ state }, { date, client }) {
    state.timesheet = (await this.$axios.$get(`/api/months`, {
        search: { date, client }
    }))[0]

    return state.timesheet
}

export async function saveTimesheet({ state }, { date, client }) {
    state.timesheet = (await this.$axios.$post(`/api/months`, {
        search: { date, client }
    }))[0]

    return state.timesheet
}
