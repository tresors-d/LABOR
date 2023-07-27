const Patient = require("../Models/patientmodel");
const patientDao = require("../Dao/patientDao");
const appconfig = require("../config/appconfig");
const appConfig = require("../config/appconfig");

module.exports = {
    createPatient: (req, res, next) => {
        console.log(req.body)

        const patient = new Patient({
            id: req.params.id,
            last_name: req.body.last_name,
            first_name: req.body.first_name,
            adress: req.body.adress,
            both_date: req.body.both_date,
            phone_number: req.body.phone_number,
            sex: req.body.sex,
            id: req.body.id,


        })
        const action = req.body.action;

        if (action === 'Save') {
            patientDao.save(patient, (err, result) => {

                if (err) {
                    console.log(err);
                    res.json(err);

                } else {


                    console.log(`patient created successfully with ID ${result.insertId}. Details...`);
                    console.log(result);

                    res.redirect("/patient");


                }


            });
        } else if (action === 'Update') {
            patientDao.put(patient, (err, result) => {

                if (err) {
                    console.log(err);
                    res.json(err);
                } else {
                    console.log(`patient update successfully with ID ${result.updateId}. Details...`);
                    console.log(result);
                    const id = req.params.id;

                    res.redirect("/patient")





                }
            })
        }
    },

    modifyPatient: (req, res, next) => {
        const id = req.params.id;
        patientDao.get((err, data) => {
            const patientList = [];
            if (err) {

                console.log(err);
                req.json(err);
            } else {
                data.forEach(it => patientList.push(it))
            }
            var patientToUpdate;
            patientList.forEach(function (patient) {
                if (patient.id == req.params.id) {
                    patientToUpdate = patient;
                }
            })
            res.render('patient', {

                patientToUpdate: patientToUpdate,
                patients: patientList

            })



        })
    },




    deletePatient: (req, res, next) => {
        const id = req.params.id;
        patientDao.delete({ id: id }, (err, result) => {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log('patient delete');
                console.log(`Patient deleted successfully with ID ${id}. Details...`);
                console.log(result);
                res.redirect("/patient");
            }
        });

    },

    getpatients: (req, res) => {
        patientDao.get((err, data) => {
            const patientList = [];
            if (err) {

                console.log(err);
                req.json(err);
            } else {
                data.forEach(it => patientList.push(it))

            }

            res.render('patient', {
                patients: patientList
            })
        })
    }






}