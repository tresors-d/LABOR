const Patient = require("../Models/patientmodel");
const patientDao = require("../Dao/patientDao");
//const patient = require("../Models/patientmodel");

module.exports = {
    createPatient: (req, res) => {
        console.log(req.body)
        
        const patient = new Patient({
            _id: req.params.id,
            last_name: req.body.last_name,
            first_name: req.body.first_name,
            adress: req.body.adress,
            both_date: req.body.both_date,
            phone_number: req.body.phone_number,
            sex: req.body.sex



        })
        patientDao.save(patient, (err, result) => {
            if (err) {
                console.log(err);
                res.json(err);
            } else {

                console.log(`patient created successfully with ID ${result.insertId}. Details...`);
                console.log(result);
                // res.json(result);
                res.render("../views/patient");

            }
        });
    },
    modifyPatient: (req, res) => {
        
        const Patient = new Patient({
            _id: req.params.id,
            last_name: req.body.last_name,
            first_name: req.body.first_name,
            adress: req.body.adress,
            both_date: req.body.both_date,
            phone_number: req.body.phone_number,
            sex: req.body.sex

        })
        patientDao.put(patient, (err, result) => {

            if (err) {
                console.log(err);

            } else {
                console.log(`patient upded successfully with ID ${result.updateId}. Details...`);
                console.log(result);
                res.json(result);
                res.render("patientupdate")
            }
        })

    },


    deletePatient: (req, res) => {
        patient.delete({ _id: req.params.id })
        patientDao.delete(patient, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`patient delete successfully`);
                console.log(result);
                res.json(result);
            }
        })
    },


    getpatients: (req, res) => {
        patientDao.get((err, data) => {
            const patientList = [];
            if (err) {

                console.log(err);
                req.json(err);
            } else {
                data.forEach(it => patientList.push(it))

                console.log(`patient list`)

                console.log(data)
            }

            res.render('patient', {
                patients: patientList
            })
        })
    }






}