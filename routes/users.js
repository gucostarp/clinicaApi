const express = require('express');

const { getConnection } = require('typeorm');

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const userRepository = getConnection().getRepository('User');
    const users = await userRepository.find();
    res.json(users);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const userRepository = getConnection().getRepository('User');
    const insertedUser = await userRepository.save(req.body);

    res.json(insertedUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
