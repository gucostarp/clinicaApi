const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Specialist',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        registry: {
            type: String,
            length: 100,
            unique: true,
        },
        name: {
            type: String,
            length: 255,
            nullable: false,
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
        },

    },
    relations: {
        address: {
            type: 'one-to-many',
            target: 'Address',
            cascade: true,
            nullable: false,
        },
        occupation: {
            type: 'many-to-one',
            target: 'Occupation',
            cascade: false,
            nullable: false,
        },
    },
});