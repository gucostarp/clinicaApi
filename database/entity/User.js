const { EntitySchema } = require('typeorm');
// const Modelo = require('./Modelo');

module.exports = new EntitySchema({
    name: 'User',
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
        username: {
            type: String,
            length: 20,
            nullable: false,
            unique: true,
        },
        password: {
            type: String,
            length: 255,
            nullable: false,
        },
        // ...Modelo,
    },
});