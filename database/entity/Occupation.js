const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'Occupation',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        name: {
            type: String,
            nullable: false,
            length: 150,
        },

    },
    relations: {
        specialist: {
            target: 'Specialist',
            type: 'one-to-many',
            nullable: true,
        },
    },
});