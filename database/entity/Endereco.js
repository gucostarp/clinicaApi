const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Endereco',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        cep: {
            type: String,
            length: 255,
            nullable: false,
        },
        rua: {
            type: String,
            length: 255,
            nullable: false,
        },
        bairro: {
            type: String,
            length: 100,
            nullable: false,
        },
        cidade: {
            type: String,
            length: 255,
            nullable: true,
        },
        estado: {
            type: String,
            length: 100,
            nullable: false,
        },
    },
});