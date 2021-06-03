const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const clientesRouter = require('./routes/clientes');
const atendimentosRouter = require('./routes/clientes');
const especialistasRouter = require('./routes/especialistas');
const profissoesRouter = require('./routes/profissoes');
const prontuariosRouter = require('./routes/prontuarios');
const authRouter = require('./routes/auth');

const { startDB } = require('./database');

const app = express();

startDB();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/clientes', clientesRouter);
app.use('/atendimentos', atendimentosRouter);
app.use('/especialistas', especialistasRouter);
app.use('/profissoes', profissoesRouter);
app.use('/prontuarios', prontuariosRouter);
app.use('/auth', authRouter);

module.exports = app;