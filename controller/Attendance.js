const repository = require('../services/Attendance');

const get = async(req, res) => {

    try {
        const attendance = await repository.list(req.body, req.query);
        res.status(200).json(attendance);
    } catch (error) {
        res.status(400).json(req.t('attendance_list_error'));
    }
};

const getOne = async(req, res) => {

    try {
        const attendance = await repository.detail(req.params.id);
        res.status(200).json(attendance);
    } catch (error) {
        res.status(400).json(req.t('attendance_list_error'));
    }
};

const deleteOne = async(req, res) => {

    try {
        const attendance = await repository.delete(req.params.id);
        res.status(200).json(attendance);
    } catch (error) {
        res.status(400).json(req.t('attendance_deleting_error'));
    }
};

const update = async(req, res) => {

    try {
        const { id } = req.params;
        const fields = req.body;
        const attendance = await repository.update(id, fields);
        res.status(200).json(attendance);
    } catch (error) {
        res.status(400).json(req.t('attendance_updating_error'));
    }
};

const insert = async(req, res) => {

    try {
        const insertedAttendance = await repository.insert(req.body);
        res.status(201).json(insertedAttendance);
    } catch (error) {
        res.status(400).json(req.t('attendance_create_error'));
    }
};

module.exports = {
    get,
    getOne,
    deleteOne,
    update,
    insert,
};