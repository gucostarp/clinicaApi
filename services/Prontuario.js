const { createConnection, getRepository } = require('typeorm');

module.exports = {

    async getProntuarios() {
        const connectDb = await createConnection();

        try {

            const prontuarioRepository = getRepository('Prontuario');
            const prontuarios = await prontuarioRepository.find({ relations: ['cliente'] });
            return (prontuarios);
        } finally {
            connectDb.close()
        }
    },

    async getProntuario(id) {
        const connectDb = await createConnection();

        try {

            const prontuarioRepository = getRepository('Prontuario');
            const prontuario = await prontuarioRepository.findOne(id, { relations: ['cliente'] });
            return (prontuario);
        } finally {
            connectDb.close()
        }
    },

    async updateProntuario(id, fields) {
        const connectDb = await createConnection();

        try {

            const prontuarioRepository = getRepository('Prontuario');
            await prontuarioRepository.update(id, fields);
            return getProntuario(id);
        } finally {
            connectDb.close()
        }
    },

    async deleteProntuario(id) {
        const connectDb = await createConnection();

        try {
            const prontuarioRepository = getRepository('Prontuario');
            await prontuarioRepository.delete(id);
            return { message: 'Prontuario excluído' };
        } finally {
            connectDb.close()
        }
    },

    async insertProntuario(prontuario) {
        const connectDb = await createConnection();

        try {

            const prontuarioRepository = getRepository('Prontuario');
            const insertedProntuario = await prontuarioRepository.save(prontuario);
            return insertedProntuario;
        } finally {
            connectDb.close()
        }
    },

};