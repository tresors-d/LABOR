const Patient = require("../Models/patientmodel");
const patientDao = require("../Dao/patientDao");


module.exports = {
    createPatient: (req, res, next) => {
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
               
                res.redirect("/patient");
                next();

            }
        });
    },
    modifyPatient: (req, res, next) => {
        
        patientDao.get((err, data) => {
            const patientList = [];
            if (err) {

                console.log(err);
                req.json(err);
            } else {
                data.forEach(it => patientList.push(it))  
            }
            const patientToUpdate = patientList.find(it => it.id === req.params.id);
           
            res.render('patient', {
                
                patientToUpdate: patientToUpdate,
                patients: patientList
                
            })
        })
    },


    deletePatient: (req, res, next) => {
        // patient.delete({ _id: req.params.id })
        patientDao.delete( (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`patient delete successfully`);
                console.log(result);
                res.json(result);
                //res.render("delete", {patient: result.rows[0]});
                res.render('delet', {patient});
                res.redirect("/patient");
                next()
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
            }

            res.render('patient', {
                patients: patientList
            })
        })
    }






}