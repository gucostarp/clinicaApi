const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'PatientRecordHistory',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        date: {
            type: Date,
            nullable: false,
        },
        hour: {
            type: 'time',
            nullable: false,
        },
        description: {
            type: String,
            length: 255,
            nullable: false,
        },
    },

    relations: {
        patientRecord: {
            type: 'many-to-one',
            target: 'PatientRecord',
            cascade: true,
        },
        specialist: {
            type: 'many-to-one',
            target: 'Specialist',
        },
    },

});