const { createConnection, getRepository } = require('typeorm');

module.exports = {

    async getEspecialistas() {
        const connectDb = await createConnection();

        try {

            const especialistaRepository = getRepository('Especialista');
            const especialistas = await especialistaRepository.find({ relations: ['profissao'] });
            return (especialistas);
        } finally {
            connectDb.close()
        }
    },

    async getEspecialista(id) {

        const especialistaRepository = getRepository('Especialista');
        const especialista = await especialistaRepository.findOne(id, { relations: ['profissao'] });
        return (especialista);

    },

    async updateEspecialista(id, fields) {

        const especialistaRepository = getRepository('Especialista');
        await especialistaRepository.update(id, fields);
        return getEspecialista(id);
    },


    async deleteEspecialista(id) {
        const especialistaRepository = getRepository('Especialista');
        await especialistaRepository.delete(id);
        return { message: 'Especialista excluído' };
    },

    async insertEspecialista(especialista) {

        const especialistaRepository = getRepository('Especialista');
        const insertedEspecialista = await especialistaRepository.save(especialista);
        return insertedEspecialista;
    },

};