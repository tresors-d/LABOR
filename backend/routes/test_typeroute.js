const express = require('express');
const router = express.Router();
const appConfig = require("../config/appconfig");


const test_typecontroller = require('../Controllers/test_typecontroller');

router.get('/', test_typecontroller.getTest_types);
router.post('/', test_typecontroller.createTest_type);
router.get('/update/:id', test_typecontroller.modifyTest_type);
router.get('/delete/:id', test_typecontroller.deleteTest_type);


module.exports = router;