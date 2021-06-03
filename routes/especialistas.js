const express = require('express');

const router = express.Router();

const userController = require('../controller/Especialista');

/* GET users listing. */
router.get('/', async(req, res) => {
    try {
        const especialistas = await userController.getEspecialistas();
        res.json(especialistas);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar especialistas' });
    }
});

/* GET user listing. */
router.get('/:id', async(req, res) => {
    try {
        const especialistas = await userController.getEspecialista(req.params.id);
        res.json(especialistas);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar atendimento' });
    }
});

/* DELETE user. */
router.delete('/:id', async(req, res) => {
    try {
        const especialistas = await userController.deleteEspecialista(req.params.id);
        res.json(especialistas);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar atendimento' });
    }
});
/* UPDATE user. */
router.put('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const especialistas = await userController.updateEspecialista(id, fields);
        res.json(especialistas);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados do atendimento' });
    }
});

/* POST user. */
router.post('/', async(req, res) => {
    try {
        const insertedEspecialista = await userController.insertEspecialista(req.body);
        res.json(insertedEspecialista);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar atendimento' });
    }
});

module.exports = router;