const repository = require('../services/Client');
const { getRepository } = require('typeorm');
const { cpf } = require('cpf-cnpj-validator');

get = async(req, res) => {

    try {
        const client = await repository.list(req.body);
        res.status(200).json(client);
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: 'Error listing clients.' });
    }
};

getOne = async(req, res) => {

    try {
        const client = await repository.detail(req.params.id);
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json({ message: 'Error listing client.' });
    }
};

deleteOne = async(req, res) => {

    try {
        const client = await repository.delete(req.params.id);
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json({ message: 'Error deleting clients.' });
    }
};

update = async(req, res) => {

    try {
        const { id } = req.params;
        const fields = req.body;
        const client = await repository.update(id, fields);
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json({ message: 'Error updating clients.' });
    }
};

insert = async(req, res) => {

        const { email, cpf: cpfClient } = req.body;

        try {
            if (!cpf.isValid(cpfClient)) {
                return res.status(403).json({ message: 'Digite um CPF válido!' })
            }

            const repo = getRepository('Client');
            const findEmail = await repo.findOne({
                where: { email },
            });
            if (findEmail) {
                return res.status(403).json({ message: 'Email já cadastrado.' });
            }
            const findCpf = await repo.findOne({
                where: { cpf: cpfClient },
            });
            if (findCpf) {
                return res.status(403).json({ message: 'CPF já cadastrado.' });
            }

            const insertedClient = await repository.insert(req.body);

            res.status(201).json(insertedClient);

        } catch (error) {
            console.log(error)

            return res.status(404).json({ message: 'Error inserting client.' });
        }

    },

    module.exports = {
        get,
        getOne,
        deleteOne,
        update,
        insert
    };