const { createConnection, getRepository } = require('typeorm');

module.exports = {

    async getAtendimentos(filter) {
        const connectDb = await createConnection();

        try {
            const findArguments = { relations: ['cliente', 'especialista'] };

            if (filter) { findArguments.where = filter; }
            const atendimentoRepository = getRepository('Atendimento');
            const atendimentos = await atendimentoRepository.find(findArguments);
            return (atendimentos);
        } finally {
            connectDb.close()
        }
    },

    async getAtendimento(id) {
        const connectDb = await createConnection();

        try {
            const atendimentoRepository = getRepository('Atendimento');
            const atendimento = await atendimentoRepository.findOne(id, { relations: ['cliente', 'especialista'] });
            return (atendimento);
        } finally {
            connectDb.close()
        }
    },

    async updateAtendimento(id, fields) {
        const connectDb = await createConnection();

        try {
            const atendimentoRepository = getRepository('Atendimento');
            epository('Atendimento');
            await atendimentoRepository.update(id, fields, { relations: ['cliente', 'especialista'] });
            return getAtendimento(id);
        } finally {
            connectDb.close()
        }
    },

    async deleteAtendimento(id) {
        const connectDb = await createConnection();

        try {
            const atendimentoRepository = getRepository('Atendimento');
            await atendimentoRepository.delete(id);
            return { message: 'Atendimento excluído' };
        } finally {
            connectDb.close()
        }
    },

    async insertAtendimento(atendimento) {
        const connectDb = await createConnection();

        try {
            const atendimentoRepository = getRepository('Atendimento');
            const insertedAtendimento = await atendimentoRepository.save(atendimento);
            return insertedAtendimento;
        } finally {
            connectDb.close()
        }
    }

}