const atendimentoEntity = require('./database/entity/Atendimento');
const clienteEntity = require('./database/entity/Cliente');
const enderecoEntity = require('./database/entity/Endereco');
const especialistaEntity = require('./database/entity/Especialista');
const profissaoEntity = require('./database/entity/Profissao');
const prontuarioEntity = require('./database/entity/Prontuario');
const prontuarioHisEntity = require('./database/entity/ProntuarioHis');
const userEntity = require('./database/entity/User');

module.exports = {
    type: 'postgres',
    synchronize: true,
    host: 'localhost',
    username: 'postgres',
    password: 'luframa23',
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