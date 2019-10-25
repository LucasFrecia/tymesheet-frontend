export default {
    mode: 'spa',

    plugins: ['plugins/main.js', './plugins/mini-toastr.js'],

    modules: ['@nuxtjs/axios', '@nuxtjs/auth', '@nuxtjs/proxy'],

    buildModules: ['@nuxtjs/vuetify'],
    
    vuetify: {
        optionsPath: './vuetify.options.js'
    },

    vuetify: {
        theme: {
            light: true,
            themes: {
                light: {
                    primary: '#11171E'
                }
            }
        }
    },

    serverMiddleware: ['~/api/auth.js'],

    router: {
        // All routes must be authorised.
        // set { auth: false } in pages that are open to everyone.
        middleware: ['auth']
    },

    auth: {
        redirect: {
            // Auth0 callback, must be the same as configured for the service
            callback: '/callback',
            // On logout go to home page
            logout: '/',
            // This is the login page
            login: '/login',
            // go here after login if no other page was requested
            home: '/'
        },
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: '/auth/login',
                        propertyName: 'token.accessToken'
                    },
                    logout: { url: '/auth/logout' },
                    user: { url: '/auth/user' }
                }
            }
        }
    },

    proxy: ['http://localhost:3030/api'],

    axios: {
        // baseURL: 'http://localhost:3000/'
        //credentials: true
    }
}
