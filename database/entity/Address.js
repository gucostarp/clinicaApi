const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Address',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        zip: {
            type: String,
            length: 255,
            nullable: false,
        },
        street: {
            type: String,
            length: 255,
            nullable: false,
        },
        neighborhood: {
            type: String,
            length: 100,
            nullable: false,
        },
        city: {
            type: String,
            length: 255,
            nullable: true,
        },
        state: {
            type: String,
            length: 100,
            nullable: false,
        },
    },

    relations: {
        client: {
            type: 'many-to-one',
            target: 'Client',
            cascade: true,
        },
        specialist: {
            type: 'many-to-one',
            target: 'Specialist',
            cascade: true,
        },
    },

});