const clienteRepository = require('../services/Cliente');
const prontuarioRepository = require('../services/Prontuario')

const get = async(req, res) => {
    try {
        const clientes = await clienteRepository.getClientes(req.body);
        res.json(clientes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar clientes' });
    }
};

const getOne = async(req, res) => {
    try {
        const clientes = await clienteRepository.getCliente(req.params.id);
        res.json(clientes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar cliente' });
    }
};

const deleteOne = async(req, res) => {
    try {
        const clientes = await clienteRepository.deleteCliente(req.params.id);
        res.json(clientes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar cliente' });
    }
};

const update = async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const clientes = await clienteRepository.updateCliente(id, fields);
        res.json(clientes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados do cliente' });
    }
};

const insert = async(req, res) => {
    try {
        const insertedCliente = await clienteRepository.insertCliente(req.body);
        const prontuario = await prontuarioRepository.insertCliente({ cliente: insertedCliente.id })
        const resultado = (insertedCliente, prontuario)
        res.json(resultado);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao inserir cliente' });
    }
};


module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert
};