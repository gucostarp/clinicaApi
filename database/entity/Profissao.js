const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Profissao',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        name: {
            type: String,
            nullable: false,
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