const Atendimento = require('./Atendimento');
const Auth = require('./Auth');
const Cliente = require('./Cliente');
const Especialista = require('./Especialista');
const Profissao = require('./Profissao');
const Prontuario = require('./Prontuario');
const ProntuarioHistorico = require('./ProntuarioHistorico');
const User = require('./User');

const Controllers = {
    Atendimento,
    Auth,
    Cliente,
    Especialista,
    Profissao,
    Prontuario,
    ProntuarioHistorico,
    User
}

module.exports = Controllers