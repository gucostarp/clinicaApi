const express = require('express');
const router = express.Router();
const authController = require('../controller/Auth');
const authMiddleware = require('../Middleware/auth');

router.use(authMiddleware);


router.post('/', async(req, res) => {
    try {
        const result = await authController.login(req.body);
        console.log(req.body)
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Erro ao logar' });
    }
});

module.exports = router;