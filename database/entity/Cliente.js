const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Cliente',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        name: {
            type: String,
            length: 255,
            nullable: false,
        },
        cpf: {
            type: Number,
            nullable: false,
            unique: true,
        },
        phone: {
            type: Number,
            nullable: false,
        },
        cellphone: {
            type: Number,
            nullable: true,
        },
        email: {
            type: String,
            length: 150,
            nullable: false,
        },
        blood: {
            type: String,
            length: 3,
            nullable: false,
        },
    },
});