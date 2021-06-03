const express = require('express');

const router = express.Router();

const authController = require('../controller/Auth');

router.post('/', async(req, res) => {
    try {
        const result = await authController.login(req.body);
        console.log(req.body)
        res.json(result);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao logar' });
    }
});

module.exports = router;