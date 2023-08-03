const express = require('express');
const router = express.Router();
const appConfig = require("../config/appconfig");


const test_requestcontroller = require('../Controllers/test_requestcontroller');

router.get('/', test_requestcontroller.getTest_request);
router.post('/', test_requestcontroller.createTest_request);
//router.get('/:id', patientcontroller.getOnepatient);
router.get('/update/:id', test_requestcontroller.modifyTest_request);
router.get('/delete/:id', test_requestcontroller.deleteTest_request);

module.exports = router;