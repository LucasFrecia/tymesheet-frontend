export async function getTimesheet({ state }, { date, client }) {
    state.timesheet = (await this.$axios.$get(`/api/months`, {
        params: { date, client }
    }))[0]

    return state.timesheet
}

export async function saveTimesheet({ state }, { date, client } = {}) {
    return this.$axios.$put(
        `/api/months/${state.timesheet.id}`,
        state.timesheet
    )
}

export async function getHistoricalTimesheets({ state }) {
    state.history = await this.$axios.$get(`/api/months`)

    return state.history
}
