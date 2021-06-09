const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
    name: 'PatientRecord',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        open_date: {
            type: Date,
            nullable: false,
        },

    },
    relations: {
        client: {
            type: 'one-to-one',
            target: 'Client',
            joinColumn: 'true',
            cascade: false,
        },
        patientRecordHistory: {
            type: 'one-to-many',
            target: 'PatientRecordHistory',
            cascade: true,
        },
    },
});