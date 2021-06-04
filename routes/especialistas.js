const express = require('express');
const router = express.Router();
const especialistaController = require('../controller/Especialista');
const authMiddleware = require('../Middleware/auth');

router.use(authMiddleware);

router.get('/', async(req, res) => {
    try {
        const especialistas = await especialistaController.getEspecialistas();
        res.json(especialistas);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar especialistas' });
    }
});

router.get('/:id', async(req, res) => {
    try {
        const especialistas = await especialistaController.getEspecialista(req.params.id);
        res.json(especialistas);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar atendimento' });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const especialistas = await especialistaController.deleteEspecialista(req.params.id);
        res.json(especialistas);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar atendimento' });
    }
});

router.put('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const especialistas = await especialistaController.updateEspecialista(id, fields);
        res.json(especialistas);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados do atendimento' });
    }
});

router.post('/', async(req, res) => {
    try {
        const insertedEspecialista = await especialistaController.insertEspecialista(req.body);
        res.json(insertedEspecialista);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar atendimento' });
    }
});

module.exports = router;