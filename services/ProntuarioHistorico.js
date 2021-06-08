const { createConnection, getRepository } = require('typeorm');

module.exports = {

    async getProntuarios() {
        const connectDb = await createConnection();

        try {

            const prontuarioHistoricoRepository = getRepository('Prontuario');
            const prontuarios = await prontuarioHistoricoRepository.find({ relations: ['especialista, prontuario'] });
            return (prontuarios);
        } finally {
            connectDb.close()
        }
    },

    async getProntuario(id) {
        const connectDb = await createConnection();

        try {

            const prontuarioHistoricoRepository = getRepository('Prontuario');
            const prontuario = await prontuarioHistoricoRepository.findOne(id, { relations: ['especialista, prontuario'] });
            return (prontuario);
        } finally {
            connectDb.close()
        }
    },

    async updateProntuario(id, fields) {
        const connectDb = await createConnection();

        try {

            const prontuarioHistoricoRepository = getRepository('Prontuario');
            await prontuarioHistoricoRepository.update(id, fields, { relations: ['especialista, prontuario'] });
            return getProntuario(id);
        } finally {
            connectDb.close()
        }
    },

    async deleteProntuario(id) {
        const connectDb = await createConnection();

        try {
            const prontuarioHistoricoRepository = getRepository('Prontuario');
            await prontuarioHistoricoRepository.delete(id);
            return { message: 'Prontuario excluído' };
        } finally {
            connectDb.close()
        }
    },

    async insertProntuario(prontuario) {
        const connectDb = await createConnection();

        try {

            const prontuarioHistoricoRepository = getRepository('Prontuario');
            const insertedProntuario = await prontuarioHistoricoRepository.save(prontuario);
            return insertedProntuario;
        } finally {
            connectDb.close()
        }
    },

};