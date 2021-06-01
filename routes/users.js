const express = require('express');

const router = express.Router();

const userController = require('../controller/User');

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const users = await userController.getUsers();
    res.json(users);
  } catch (error) {
    res.status(400).json(error);
  }
});

/* GET user listing. */
router.get('/:id', async (req, res) => {
  try {
    const users = await userController.getUser(req.params.id);
    res.json(users);
  } catch (error) {
    res.status(400).json(error);
  }
});

/* DELETE user. */
router.delete('/:id', async (req, res) => {
  try {
    const users = await userController.deleteUser(req.params.id);
    res.json(users);
  } catch (error) {
    res.status(400).json(error);
  }
});
/* UPDATE user. */
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const fields = req.body;
    const users = await userController.updateUser(id, fields);
    res.json(users);
  } catch (error) {
    res.status(400).json(error);
  }
});

/* POST user. */
router.post('/', async (req, res) => {
  try {
    const insertedUser = await userController.insertUser(req.body);

    res.json(insertedUser);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
