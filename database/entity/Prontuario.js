const { EntitySchema } = require('typeorm');
// const Modelo = require('./Modelo');

module.exports = new EntitySchema({
    name: 'Prontuario',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        data_abertura: {
            type: Date,
            nullable: false,
        },
        // ...Modelo,
    },
    relations: {
        cliente: {
            type: 'one-to-one',
            target: 'Cliente',
            joinColumn: 'true',
            cascade: false,
        },
        prontuarioHistorico: {
            type: 'one-to-many',
            target: 'ProntuarioHistorico',
            cascade: true,
        },
    },
});