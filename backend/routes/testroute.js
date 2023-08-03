const express = require('express');
const router = express.Router();
const appConfig = require("../config/appconfig");


const testcontroller = require('../Controllers/testcontroller');

router.get('/', testcontroller.getTests);
router.post('/', testcontroller.createTest);
router.get('/update/:id', testcontroller.modifyTest);
router.get('/delete/:id', testcontroller.deleteTest);
// router.get('/test_types', testcontroller.getTest_types); // Route pour récupérer tous les types de test
// router.get('/', testcontroller.getTest_types);

module.exports = router;