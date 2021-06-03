const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/auth');

router.use(authMiddleware);

/* GET home page. */
router.get('/', (req, res) => {
    res.json({ title: 'Express' });
});

module.exports = router;