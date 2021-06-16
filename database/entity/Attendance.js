const { EntitySchema } = require('typeorm');


module.exports = new EntitySchema({
    name: 'Attendance',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        scheduling_date: {
            type: 'date',
            nullable: false,
        },
        attendance_date: {
            type: 'date',
            nullable: false,
        },
        hour: {
            type: 'time',
            nullable: false,
        },
        amount: {
            type: String,
            length: 255,
            nullable: false,
        },
        status: {
            type: 'enum',
            enum: ['AGENDADO', 'REALIZADO', 'CANCELADO'],
            nullable: false,
        },

    },
    relations: {
        specialist: {
            type: 'many-to-one',
            target: 'Specialist',
            cascade: false,
        },
        client: {
            type: 'many-to-one',
            target: 'Client',
            cascade: false,
        },
    },

});