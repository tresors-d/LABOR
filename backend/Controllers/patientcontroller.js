const patient = require("../Models/patientmodel");


module.exports = {
    createPatient: (req, res) => {
        const patient = new patient({
            lastName: 'nguegang',
            firstName: 'Tresor',
            address: 'ngui, Dschang',
            bothDate: '06/07/2009', 
            phoneNumber: '693265372',
            sex: 'F'
        })
        patientDao.save(patient, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                //res.render(...) | res.json(...) | ...
                console.log(`patient created successfully with ID ${result.insertId}. Details...`);
                console.log(result);
            }
        });
    }
}