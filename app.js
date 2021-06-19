const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const startDB = require('./database/index');
const cors = require('cors');
const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
// const { pagination } = require('typeorm-pagination');

dotenv.config();

const Router = require('./routes/index')

const app = express();

(async() => {
    await startDB();
})()

// app.use(bodyParser.json());
// app.use(pagination);
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', Router);

module.exports = app;