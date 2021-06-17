const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const startDB = require('./database/index');
const cors = require('cors');
const dotenv = require('dotenv');
const redis = require("redis");
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

dotenv.config();
const client = redis.createClient(process.env.REDIS_URL);


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