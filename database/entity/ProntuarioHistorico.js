const { EntitySchema } = require('typeorm');
const Modelo = require('./Modelo');

module.exports = new EntitySchema({
    name: 'ProntuarioHistorico',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        data: {
            type: 'date',
            nullable: false,
        },
        hora: {
            type: 'time',
            nullable: false,
        },
        descricao: {
            type: String,
            length: 255,
            nullable: false,
        },
        ...Modelo,
    },
    relations: {
        prontuario: {
            type: 'many-to-one',
            target: 'Prontuario',
            cascade: true,
        },
        especialista: {
            type: 'one-to-one',
            target: 'Especialista',
            joinColumn: true,
        },
    },

});