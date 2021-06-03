const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Profissao',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        nome: {
            type: String,
            nullable: false,
            length: 150,
        },
    },
    relations: {
        especialista: {
            target: 'Especialista',
            type: 'one-to-many',
            nullable: true,
        },
    },
});