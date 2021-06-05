const { createConnection, getRepository } = require('typeorm');

module.exports = {

    async getProntuarios() {
        const connectDb = await createConnection();

        try {

            const prontuarioHisRepository = getRepository('Prontuario');
            const prontuarios = await prontuarioHisRepository.find({ relations: ['especialista, prontuario'] });
            return (prontuarios);
        } finally {
            connectDb.close()
        }
    },

    async getProntuario(id) {
        const connectDb = await createConnection();

        try {

            const prontuarioHisRepository = getRepository('Prontuario');
            const prontuario = await prontuarioHisRepository.findOne(id, { relations: ['especialista, prontuario'] });
            return (prontuario);
        } finally {
            connectDb.close()
        }
    },

    async updateProntuario(id, fields) {
        const connectDb = await createConnection();

        try {

            const prontuarioHisRepository = getRepository('Prontuario');
            await prontuarioHisRepository.update(id, fields, { relations: ['especialista, prontuario'] });
            return getProntuario(id);
        } finally {
            connectDb.close()
        }
    },

    async deleteProntuario(id) {
        const connectDb = await createConnection();

        try {
            const prontuarioHisRepository = getRepository('Prontuario');
            await prontuarioHisRepository.delete(id);
            return { message: 'Prontuario excluído' };
        } finally {
            connectDb.close()
        }
    },

    async insertProntuario(prontuario) {
        const connectDb = await createConnection();

        try {

            const prontuarioHisRepository = getRepository('Prontuario');
            const insertedProntuario = await prontuarioHisRepository.save(prontuario);
            return insertedProntuario;
        } finally {
            connectDb.close()
        }
    },

};