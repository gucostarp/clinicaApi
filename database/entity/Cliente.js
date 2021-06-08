const { EntitySchema } = require('typeorm');
const Modelo = require('./Modelo');

module.exports = new EntitySchema({
    name: 'Cliente',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        nome: {
            type: String,
            length: 255,
            nullable: false,
        },
        cpf: {
            type: String,
            length: 11,
            nullable: false,
            unique: true,
        },
        telefone: {
            type: String,
            length: 11,
            nullable: true,
        },
        celular: {
            type: String,
            length: 11,
            nullable: false,
        },
        email: {
            type: String,
            length: 150,
            unique: true,
            nullable: false,

        },
        tipo_sanguineo: {
            type: 'enum',
            enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
            nullable: true,
        },
        ...Modelo,
    },
    relations: {
        endereco: {
            type: 'one-to-one',
            target: 'Endereco',
            joinColumn: true,
            cascade: true,
            nullable: false,
        },
    },
});