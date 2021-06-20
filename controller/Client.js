const repository = require('../services/Client');
const { getRepository } = require('typeorm');
const { cpf } = require('cpf-cnpj-validator');

get = async(req, res) => {

    try {
        const client = await repository.list(req.body, req.query);
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json(req.t('client_list_error'));
    }
};

getOne = async(req, res) => {

    try {
        const client = await repository.detail(req.params.id);
        res.status(200).json(client);
    } catch (error) {
        res.status(404).json(req.t('client_list_error'));
    }
};

deleteOne = async(req, res) => {

    const { id } = req.params;
    try {

        const client = await repository.delete(id);
        res.status(200).json(client);
    } catch (error) {
        console.log(error)
        res.status(404).json(req.t('client_deleting_error'));
    }

};

update = async(req, res) => {

    try {
        const { id } = req.params;
        const fields = req.body;
        const client = await repository.update(id, fields);
        res.status(200).json(client);
    } catch (error) {
        console.log(error)
        res.status(404).json(req.t('client_updating_error'));
    }
};

insert = async(req, res) => {

        const { email, cpf: cpfClient } = req.body;

        try {
            if (!cpf.isValid(cpfClient)) {
                return res.status(403).json(req.t('client_cpf_validate'))
            }

            const repo = getRepository('Client');
            const findEmail = await repo.findOne({
                where: { email },
            });
            if (findEmail) {
                return res.status(403).json(req.t('client_email_duplicate'));
            }
            const findCpf = await repo.findOne({
                where: { cpf: cpfClient },
            });
            if (findCpf) {
                return res.status(403).json(req.t('client_cpf_duplicate'));
            }

            const insertedClient = await repository.insert(req.body);

            res.status(201).json(insertedClient);

        } catch (error) {
            return res.status(404).json(req.t('client_create_error'));
        }
    },

    module.exports = {
        get,
        getOne,
        deleteOne,
        update,
        insert
    };