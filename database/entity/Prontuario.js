const { EntitySchema } = require('typeorm');

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
    },
    relations: {
        cliente: {
            type: 'one-to-one',
            target: 'Cliente',
            joinColumn: 'true',
            cascade: false,
        },
        prontuarioHis: {
            type: 'one-to-many',
            target: 'ProntuarioHis',
            cascade: true,
        },
    },
});