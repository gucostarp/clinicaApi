const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Client',
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
            type: String,
            length: 14,
            nullable: false,
            unique: true,
        },
        phone: {
            type: String,
            length: 14,
            nullable: true,
        },
        cellphone: {
            type: String,
            length: 14,
            nullable: false,
        },
        email: {
            type: String,
            length: 150,
            unique: true,
            nullable: false,

        },
        blood_type: {
            type: 'enum',
            enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
            nullable: true,
        },

    },
    relations: {
        address: {
            type: 'one-to-one',
            target: 'Address',
            cascade: true,
            joinColumn: 'true',
            nullable: false,
        },
    },
});