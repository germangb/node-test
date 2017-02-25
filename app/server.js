express = require('express')
session = require('express-session')
redis_store = require('connect-redis')(session)

app = express()

redis_opt = {
    host: 'redis',
    port: 6379
}

app.use(session({
    secret: 'foo',
    store: new redis_store(redis_opt)
}))

app.get('/', (req, res) => {
    res.send('Hello node!!!!! :D')
})

app.listen(8888)
