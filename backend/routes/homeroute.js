const express = require('express');
const {indexView, formView  } = require('../Controllers/homecontroller');
const homeRouter = express.Router();

homeRouter.get('/accueil', indexView);
//router.get('/patientupdate', formView)

module.exports = {
    routes: homeRouter
}