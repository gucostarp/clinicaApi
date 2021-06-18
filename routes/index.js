const express = require('express');
const router = express.Router();
const Controllers = require('../controller/index');
const authMiddleware = require('../Middleware/auth');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');


router.post('/auth/', Controllers.Auth.login);
router.post('/refreshtoken/', Controllers.Auth.refreshToken);
router.post('/users', Controllers.User.insert);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.use(authMiddleware);


router.get('/users/', Controllers.User.get);
router.get('/users/:id', Controllers.User.getOne);
router.delete('/users/:id', Controllers.User.deleteOne);
router.put('/users/:id', Controllers.User.update);


router.get('/attendances', Controllers.Attendance.get);
router.get('/attendances/:id', Controllers.Attendance.getOne);
router.delete('/attendances/:id', Controllers.Attendance.deleteOne);
router.put('/attendances/:id', Controllers.Attendance.update);
router.post('/attendances/', Controllers.Attendance.insert);


router.get('/clients', Controllers.Client.get);
router.get('/clients/:id', Controllers.Client.getOne);
router.delete('/clients/:id', Controllers.Client.deleteOne);
router.put('/clients/:id', Controllers.Client.update);
router.post('/clients/', Controllers.Client.insert);


router.get('/specialists', Controllers.Specialist.get);
router.get('/specialists/:id', Controllers.Specialist.getOne);
router.delete('/specialists/:id', Controllers.Specialist.deleteOne);
router.put('/specialists/:id', Controllers.Specialist.update);
router.post('/specialists/', Controllers.Specialist.insert);


router.get('/occupations', Controllers.Occupation.get);
router.get('/occupations/:id', Controllers.Occupation.getOne);
router.delete('/occupations/:id', Controllers.Occupation.deleteOne);
router.put('/occupations/:id', Controllers.Occupation.update);
router.post('/occupations/', Controllers.Occupation.insert);


router.get('/patientRecords', Controllers.PatientRecord.get);
router.get('/patientRecords/:id', Controllers.PatientRecord.getOne);
router.delete('/patientRecords/:id', Controllers.PatientRecord.deleteOne);
router.put('/patientRecords/:id', Controllers.PatientRecord.update);
router.post('/patientRecords/', Controllers.PatientRecord.insert);

router.get('/patientRecordshistory', Controllers.PatientRecordHistory.get);
router.get('/patientRecordshistory/:id', Controllers.PatientRecordHistory.getOne);
router.delete('/patientRecordshistory/:id', Controllers.PatientRecordHistory.deleteOne);
router.put('/patientRecordshistory/:id', Controllers.PatientRecordHistory.update);
router.post('/patientRecordshistory/', Controllers.PatientRecordHistory.insert);


module.exports = router;