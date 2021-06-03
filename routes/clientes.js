const express = require('express');
const router = express.Router();
const userController = require('../controller/Cliente');
const authMiddleware = require('../Middleware/auth');

router.use(authMiddleware);

require('dotenv/config');


/* GET users listing. */
router.get('/', async(req, res) => {
    try {
        const clientes = await userController.getClientes();
        res.json(clientes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar clientes' });
    }
});

/* GET user listing. */
router.get('/:id', async(req, res) => {
    try {
        const clientes = await userController.getCliente(req.params.id);
        res.json(clientes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao listar cliente' });
    }
});

/* DELETE user. */
router.delete('/:id', async(req, res) => {
    try {
        const clientes = await userController.deleteCliente(req.params.id);
        res.json(clientes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao deletar cliente' });
    }
});
/* UPDATE user. */
router.put('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const fields = req.body;
        const clientes = await userController.updateCliente(id, fields);
        res.json(clientes);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar dados do cliente' });
    }
});

/* POST user. */
router.post('/', async(req, res) => {
    try {
        const insertedCliente = await userController.insertCliente(req.body);
        res.json(insertedCliente);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar cliente' });
    }
});

module.exports = router;