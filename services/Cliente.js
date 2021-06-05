const { createConnection, getRepository } = require('typeorm');

module.exports = {

    async getClientes() {
        const connectDb = await createConnection();

        try {
            const clienteRepository = getRepository('Cliente');
            const clientes = await clienteRepository.find({ relations: ['endereco'] });
            return clientes;
        } finally {
            connectDb.close()
        }
    },

    async getCliente(id) {
        const connectDb = await createConnection();

        try {
            const clienteRepository = getRepository('Cliente');
            const clientes = await clienteRepository.findOne(id);
            return clientes;
        } finally {
            connectDb.close()
        }
    },

    async updateCliente(id, fields) {
        const connectDb = await createConnection();

        try {
            const clienteRepository = getRepository('Cliente');
            await clienteRepository.update(id, fields);
            return getCliente(id);
        } finally {
            connectDb.close()
        }
    },

    async deleteCliente(id) {
        const connectDb = await createConnection();

        try {
            const clienteRepository = getRepository('Cliente');
            await clienteRepository.delete(id);
            return { message: 'Cliente excluído' };
        } finally {
            connectDb.close()
        }
    },

    async insertCliente(cliente) {
        const connectDb = await createConnection();

        try {
            const clienteRepository = getRepository('Cliente');
            const insertedCliente = await clienteRepository.save(cliente);
            return insertedCliente;
        } finally {
            connectDb.close()
        }
    },

}