const { createConnection, getRepository } = require('typeorm');

module.exports = {

    async getProfissoes() {
        const connectDb = await createConnection();

        try {
            const profissaoRepository = getRepository('Profissao');
            const profissoes = await profissaoRepository.find();
            return (profissoes);
        } finally {
            connectDb.close()
        }
    },

    async getProfissao(id) {
        const connectDb = await createConnection();

        try {
            const profissaoRepository = getRepository('Profissao');
            const especialista = await profissaoRepository.findOne(id);
            return (especialista);
        } finally {
            connectDb.close()
        }
    },

    async updateProfissao(id, fields) {
        const connectDb = await createConnection();

        try {
            const profissaoRepository = getRepository('Profissao');
            await profissaoRepository.update(id, fields);
            return getProfissao(id);
        } finally {
            connectDb.close()
        }
    },

    async deleteProfissao(id) {
        const connectDb = await createConnection();

        try {
            const profissaoRepository = getRepository('Profissao');
            await profissaoRepository.delete(id);
            return { message: 'Profissao excluído' };
        } finally {
            connectDb.close()
        }
    },

    async insertProfissao(profissao) {
        const connectDb = await createConnection();

        try {
            const profissaoRepository = getRepository('Profissao');
            const insertedProfissao = await profissaoRepository.save(profissao);
            return insertedProfissao;
        } finally {
            connectDb.close()
        }
    },

};