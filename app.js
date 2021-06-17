const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const startDB = require('./database/index');
const cors = require('cors');
const dotenv = require('dotenv');
var session = require('express-session');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

dotenv.config();

var RedisStore = require('connect-redis')(session);

var redisClient = require('redis').createClient(process.env.REDIS_URL);

var redisOptions = {
    client: redisClient,
    no_ready_check: true,
    ttl: 600,
    logErrors: true
};

var redisSessionStore = new RedisStore(redisOptions);

app.use(session({
    store: redisSessionStore,
    secret: 'Some.Long.Series.of.Crazy.Words.and.Jumbled.letter.etc',
    resave: true,
    saveUninitialized: true
}));

const Router = require('./routes/index')

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const app = express();

(async() => {
    await startDB();
})()


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', Router);


module.exports = app;