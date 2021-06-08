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
        const connectDb = await createConnection();

        try {

            const especialistaRepository = getRepository('Especialista');
            const especialista = await especialistaRepository.findOne(id, { relations: ['profissao'] });
            return (especialista);
        } finally {
            connectDb.close()
        }

    },

    async updateEspecialista(id, fields) {
        const connectDb = await createConnection();

        try {

            const especialistaRepository = getRepository('Especialista');
            await especialistaRepository.update(id, fields);
            return getEspecialista(id);
        } finally {
            connectDb.close()
        }
    },


    async deleteEspecialista(id) {
        const connectDb = await createConnection();

        try {
            const especialistaRepository = getRepository('Especialista');
            await especialistaRepository.delete(id);
            return { message: 'Especialista excluído' };
        } finally {
            connectDb.close()
        }
    },

    async insertEspecialista(especialista) {
        const connectDb = await createConnection();

        try {

            const especialistaRepository = getRepository('Especialista');
            const insertedEspecialista = await especialistaRepository.save(especialista);
            return insertedEspecialista;
        } finally {
            connectDb.close()
        }
    },

};