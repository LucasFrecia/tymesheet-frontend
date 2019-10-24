const app = require('express')()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('express-jwt')
const jsonwebtoken = require('jsonwebtoken')

// Install middleware
app.use(cookieParser())
app.use(bodyParser.json())

// JWT middleware
app.use(
    jwt({
        secret: 'dummy'
    }).unless({
        path: '/auth/login'
    })
)

// -- Routes --

app.use((req, res, next) => {
    console.log('PATH:', req.method, req.url, req.body) //, req.headers)
    next()
})

// [POST] /login
app.post('/login', (req, res, next) => {
    const { username, password } = req.body
    const valid = username.length && password === 'test123'

    if (!valid) {
        res.json()
        throw new Error('401')
        // throw new Error('Invalid username or password')
    }

    const accessToken = jsonwebtoken.sign(
        {
            username,
            picture: 'https://github.com/nuxt.png',
            name: 'User ' + username,
            scope: ['test', 'user']
        },
        'dummy'
    )

    res.json({
        token: {
            accessToken
        }
    })
})

// [GET] /user
app.get('/user', (req, res, next) => {
    res.json({ user: req.user })
})

// [POST] /logout
app.post('/logout', (req, res, next) => {
    res.json({ status: 'OK' })
})

// Error handler
app.use((err, req, res, next) => {
    //if (err !== '401') console.error(err) // eslint-disable-line no-console
    res.status(401).send('Invalid user credentials')
})

// -- export app --
module.exports = {
    path: '/auth',
    handler: app
}

console.log('! AUTH')
