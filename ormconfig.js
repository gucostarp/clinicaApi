const atendimentoEntity = require('./database/entity/Atendimento');
const clienteEntity = require('./database/entity/Cliente');
const enderecoEntity = require('./database/entity/Endereco');
const especialistaEntity = require('./database/entity/Especialista');
const profissaoEntity = require('./database/entity/Profissao');
const prontuarioEntity = require('./database/entity/Prontuario');
const prontuarioHisEntity = require('./database/entity/ProntuarioHis');
const userEntity = require('./database/entity/User');
require('dotenv/config');



module.exports = {
    type: 'postgres',
    synchronize: true,
    host: 'localhost',
    username: process.env.USER,
    password: process.env.PASSWORD,
    port: '5432',
    logging: true,
    logger: 'simple-console',
    database: 'clinica_api',
    entities: [
        atendimentoEntity,
        userEntity,
        clienteEntity,
        enderecoEntity,
        especialistaEntity,
        profissaoEntity,
        prontuarioEntity,
        prontuarioHisEntity
    ],
    migrations: ['./database/migration/*.js'],
    cli: {
        migrationsDir: './database/migration',
    },
};