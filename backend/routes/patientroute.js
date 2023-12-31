const express = require('express');
const router = express.Router();
const appConfig = require("../config/appconfig");


const patientcontroller = require('../Controllers/patientcontroller');

router.get('/', patientcontroller.getpatients);
router.post('/', patientcontroller.createPatient);
//router.get('/:id', patientcontroller.getOnepatient);
router.get('/update/:id', patientcontroller.modifyPatient);
router.get('/delete/:id', patientcontroller.deletePatient);

module.exports = router;