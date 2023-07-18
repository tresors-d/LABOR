const { data } = require("jquery");
const appconfig = require("../config/appconfig");
const appConfig = require("../config/appconfig");

module.exports = {
    save: (patient, callback) => {
        const connection = appConfig.connection;
        connection.connect(err => {
            if(!err) {
                const sql = `INSERT INTO patient(last_name, first_name, adress, both_date, phone_number, sex) VALUES('${patient.last_name}', '${patient.first_name}', '${patient.adress}', '${patient.both_date}' ,'${patient.phone_number}', '${patient.sex}')`;
                connection.query(sql, (err, result) => {
                    callback(err, result);
                });
            }
        })
    },

   put: (patient, callback) => {
    const connection = appconfig.connection;
    connection.connect(err => {
        if(!err) {
            const sql = `UPDATE patient SET (last_name = ?, first_name = ?, adress = ?, both_date ?, phone_number ?, sex = ?) WHERE id = ? ('${patient.last_name}', '${patient.first_name}', '${patient.adress}', '${patient.both_date}', '${patient.phone_number}', '${patient.sex}')`;
            connection.query(sql, (err, result) => {
                callback(err, result);
            });  
        }
    })
   },

   delete: (patient, callback) => {
    const connection = appconfig.connection;
    connection.connect(err => {
        if(!err) {
            const  sql = `DELETE FROM patient WHERE id = ? ('${patient.id}')`;
            connection.query(sql, (err, result) => {
                callback(err, result);
            })
        }
    })

   },

   get: (callback) => {
    const connection = appconfig.connection;
    connection.connect(err => {
        if(!err) {
            const sql = `SELECT * FROM patient`;
            connection.query(sql, (err, data) =>{
                callback(err, data);
            });
        }
    })
   }







   
 }

