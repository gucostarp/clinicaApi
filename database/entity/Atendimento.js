const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Atendimento',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        data_agendamento: {
            type: 'date',
            nullable: false,
        },
        data_atendimento: {
            type: 'date',
            nullable: false,
        },
        hora: {
            type: 'time',
            nullable: false,
        },
        valor: {
            type: String,
            length: 255,
            nullable: false,
        },
        status: {
            type: 'enum',
            enum: ['AGENDADO', 'REALIZADO', 'CANCELADO'],
            nullable: false,
        },
    },
    relations: {
        especialista: {
            type: 'many-to-one',
            target: 'Especialista',
            cascade: false,
        },
        cliente: {
            type: 'many-to-one',
            target: 'Cliente',
            cascade: false,
        },
    },

});