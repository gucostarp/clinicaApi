const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const startDB = require('./database/index');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

dotenv.config();

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "*");
//     // res.header("Access-Control-Allow-Headers", "X-Requested-With,application/json,Content-Type,X-Amz-Date,Authorization,token,X-Api-Key,Origin,Accept,Access-Control-Allow-Headers,Access-Control-Allow-Methods,Access-Control-Allow-Origin")
//     // res.header("Access-Control-Allow-Headers", "*");
//     res.header("Access-Control-Allow-Headers", "Accept,Origin,Content-Type,X-LS-CORS-Template,X-LS-Auth-Token,X-LS-Auth-User-Token,Content-Type,X-LS-Sync-Result,X-LS-Sequence,token,authorization");
//     next();
// })


const Router = require('./routes/index')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
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