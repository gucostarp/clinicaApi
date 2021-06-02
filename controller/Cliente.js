const { getConnection } = require('typeorm');

const getClientes = async() => {
    const clienteRepository = getConnection().getRepository('Cliente');
    const clientes = await clienteRepository.find();
    return clientes;
};

const getCliente = async(id) => {
    const clienteRepository = getConnection().getRepository('Cliente');
    const clientes = await clienteRepository.findOne(id);
    return clientes;
};

const updateCliente = async(id, fields) => {
    const clienteRepository = getConnection().getRepository('Cliente');
    await clienteRepository.update(id, fields);
    return getUser(id);
};

const deleteCliente = async(id) => {
    const clienteRepository = getConnection().getRepository('Cliente');
    await clienteRepository.delete(id);
    return { message: 'Cliente excluído' };
};

const insertCliente = async(cliente) => {
    const clienteRepository = getConnection().getRepository('Cliente');
    const insertedCliente = await clienteRepository.save(cliente);
    return insertedCliente;
};

module.exports = {
    updateCliente,
    deleteCliente,
    getClientes,
    getCliente,
    insertCliente,
};