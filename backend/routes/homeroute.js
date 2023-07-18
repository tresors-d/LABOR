const express = require('express');
const {indexView, formView  } = require('../Controllers/homecontroller');
const router = require('./patientroute');
const Router = express.Router();

router.get('/accueil', indexView);
//router.get('/patientupdate', formView)

module.exports = {
    routes: router
}