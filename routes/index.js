const express = require('express');
const router = express.Router();
const Controllers = require('../controller/Index');
const authMiddleware = require('../Middleware/auth');


router.post('/auth/', Controllers.Auth.login);
router.post('/users', Controllers.User.insert);

router.use(authMiddleware);

router.get('/users/', Controllers.User.get);
router.get('/users/:id', Controllers.User.getOne);
router.delete('/users/:id', Controllers.User.deleteOne);
router.put('/users/:id', Controllers.User.update);


router.get('/atendimento', Controllers.Atendimento.get);
router.get('/atendimento/:id', Controllers.Atendimento.getOne);
router.delete('/atendimento/:id', Controllers.Atendimento.deleteOne);
router.put('/atendimento/:id', Controllers.Atendimento.update);
router.post('/atendimento/', Controllers.Atendimento.insert);


router.get('/clientes', Controllers.Cliente.get);
router.get('/clientes/:id', Controllers.Cliente.getOne);
router.delete('/clientes/:id', Controllers.Cliente.deleteOne);
router.put('/clientes/:id', Controllers.Cliente.update);
router.post('/clientes/', Controllers.Cliente.insert);


router.get('/especialistas', Controllers.Especialista.get);
router.get('/especialistas/:id', Controllers.Especialista.getOne);
router.delete('/especialistas/:id', Controllers.Especialista.deleteOne);
router.put('/especialistas/:id', Controllers.Especialista.update);
router.post('/especialistas/', Controllers.Especialista.insert);


router.get('/profissoes', Controllers.Profissao.get);
router.get('/profissoes/:id', Controllers.Profissao.getOne);
router.delete('/profissoes/:id', Controllers.Profissao.deleteOne);
router.put('/profissoes/:id', Controllers.Profissao.update);
router.post('/profissoes/', Controllers.Profissao.insert);


router.get('/prontuarios', Controllers.Prontuario.get);
router.get('/prontuarios/:id', Controllers.Prontuario.getOne);
router.delete('/prontuarios/:id', Controllers.Prontuario.deleteOne);
router.put('/prontuarios/:id', Controllers.Prontuario.update);
router.post('/prontuarios/', Controllers.Prontuario.insert);


module.exports = router;