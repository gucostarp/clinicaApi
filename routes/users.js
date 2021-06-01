const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ id: 1, name: 'Guga' });
});

module.exports = router;
