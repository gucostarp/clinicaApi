const repository = require('../services/Occupation')

const get = async(req, res) => {

    try {
        const occupations = await repository.list(req.body);
        res.status(200).json(occupations);
    } catch (error) {
        res.status(404).json({ message: 'Erro ao listar profissões' });
    }
};

const getOne = async(req, res) => {

    try {
        const occupations = await repository.detail(req.params.id);
        res.status(200).json(occupations);
    } catch (error) {
        res.status(404).json({ message: 'Erro ao listar occupation' });
    }
};

const deleteOne = async(req, res) => {

    try {
        const occupations = await repository.delete(req.params.id);
        res.status(200).json(occupations);
    } catch (error) {
        res.status(404).json({ message: 'Erro ao deletar occupation' });
    }
};

const update = async(req, res) => {

    try {
        const { id } = req.params;
        const fields = req.body;
        const occupations = await repository.update(id, fields);
        res.status(200).json(occupations);
    } catch (error) {
        res.status(404).json({ message: 'Erro ao atualizar dados da occupation' });
    }
};

const insert = async(req, res) => {

    try {
        const insertedOccupation = await repository.insert(req.body);
        res.status(201).json(insertedOccupation);
    } catch (error) {
        res.status(404).json({ message: 'Erro ao criar occupation' });
    }
};


module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert
};