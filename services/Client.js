const { getConnection } = require('typeorm');
const { cpf } = require('cpf-cnpj-validator');

module.exports = {

    async list(data) {
        const connection = getConnection();
        const findData = { relations: ['address'] }
        if (data) { findData.where = data };

        const client = await connection.getRepository('Client').find(findData);
        return client;
    },

    async detail(id) {
        const connection = getConnection();

        const client = await connection.getRepository('Client').findOne(id, { relations: ['address'] });
        return client;
    },

    async update(id, fields) {
        const connection = getConnection();

        await connection.getRepository('Client').update(id, fields);
        return getClient(id);

    },

    async delete(id) {
        const connection = getConnection();

        await connection.getRepository('Client').delete(id);
        return { message: 'Client excluído' };

    },

    async insert(client) {
        const connection = getConnection();

        const errors = [];

        const findEmail = await connection.getRepository('Client').findOne({ where: { email: client.email } })
        if (findEmail) {
            errors.push({ message: 'Email já cadastrado!' })
        }

        const findCpf = await connection.getRepository('Client').findOne({ where: { cpf: client.cpf } })
        if (findCpf) {
            errors.push({ message: 'CPF já cadastrado!' })
        }

        if (!cpf.isValid(client.cpf)) {
            errors.push({ message: 'Digite um CPF válido!' })
        }

        if (errors.length == 0) {
            const insertedClient = await connection.getRepository('Client').save(client);
            return insertedClient;

        } else {
            return errors;
        }
    },

}