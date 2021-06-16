const repository = require('../services/Attendance');

const get = async(req, res) => {

    try {
        const attendance = await repository.list(req.body);
        res.status(200).json(attendance);
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Erro ao listar attendance' });
    }
};

const getOne = async(req, res) => {

    try {
        const attendance = await repository.detail(req.params.id);
        res.status(200).json(attendance);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar atendimento' });
    }
};

const deleteOne = async(req, res) => {

    try {
        const attendance = await repository.delete(req.params.id);
        res.status(200).json(attendance);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar atendimento' });
    }
};

const update = async(req, res) => {

    try {
        const { id } = req.params;
        const fields = req.body;
        const attendance = await repository.update(id, fields);
        res.status(200).json(attendance);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados do atendimento' });
    }
};

const insert = async(req, res) => {

    try {
        const insertedAttendance = await repository.insert(req.body);
        res.status(200).json(insertedAttendance);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar atendimento' });
    }
};

module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert,
};