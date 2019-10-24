const app = require('express')()

const users = []
let userId = 0

app.use((req, res, next) => {
    req.on('data', data => {
        if (!req.body) req.body = JSON.parse(data)
        req.body && console.log('BODY:', req.body)
    })
    console.log('PATH:', req.method, req.url) //, req.headers)
    next()
})

app.use('/api/auth/user', (req, res, next) => {
    console.log('AUTH: USER:', req.method)
    res.json({ username: 'paul', loggedIn: true })
    // next()
})

app.use('/api/auth/login', (req, res, next) => {
    req.on('data', data => {
        if (!req.body) req.body = JSON.parse(data)

        console.log('AUTH: LOGIN:', req.method, req.url, req.body)
        let user = existingUser(req.body)
        if (!user) {
            users.unshift({ id: userId++, ...req.body })
            user = users[0]
        }

        console.log('USERs:', users)
        res.json(user)
    })
    // next()
})

export default { handler: app }

function existingUser(user) {
    return users.find(
        u => u.username + u.password === user.username + user.password
    )
}
