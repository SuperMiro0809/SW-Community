const config = {
    port: 3000,
    dbConnectionString: "mongodb://localhost:27017/swcom",
    authCookieName: "auth_cookie",
    authHeaderName: "auth",
    jwtSecret: "secret",
    saltRounds: 10,
    origin: ['http://localhost:5555', 'http://localhost:4201'],
}

module.exports = config;