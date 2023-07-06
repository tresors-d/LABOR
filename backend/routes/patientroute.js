const express = require('express');
const router = express.Router();

const patientcontroller = require('../Controllers/patientcontroller');

//router.get('/', patientcontroller.getAllpatient);
router.post('/', patientcontroller.createPatient);
//router.get('/:id', patientcontroller.getOnepatient);
//router.put('/:id', patientcontroller.modifypatient);
//router.delete('/:id', patientcontroller.deletepatient);

module.exports = router;