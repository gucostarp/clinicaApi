const { EntitySchema } = require('typeorm');
// let baseModel = require("./BaseModel");

module.exports = new EntitySchema({
    name: 'Especialista',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        registro: {
            type: String,
            length: 100,
            unique: true,
        },
        nome: {
            type: String,
            length: 255,
            nullable: false,
        },
        telefone: {
            type: String,
            length: 14,
            nullable: true,
        },
        celular: {
            type: String,
            length: 14,
            nullable: false,
        },
        email: {
            type: String,
            length: 50,
            unique: true,
        },
    },
    relations: {
        endereco: {
            type: 'one-to-one',
            target: 'Endereco',
            joinColumn: true,
            cascade: true,
            nullable: false,
        },
        profissao: {
            type: 'many-to-one',
            target: 'Profissao',
            cascade: false,
            nullable: false,
        },
    },
});