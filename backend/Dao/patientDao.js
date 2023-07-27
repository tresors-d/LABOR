const { data } = require("jquery");
const appconfig = require("../config/appconfig");
const appConfig = require("../config/appconfig");
const mysql = require('mysql');
module.exports = {



    save: (patient, callback) => {
        const connection = mysql.createConnection(appConfig.connection.config);
        connection.connect(err => {
            if (err) {
                callback(err, null);
            } else {
                const sql = `INSERT INTO patient(last_name, first_name, adress, both_date, phone_number, sex) VALUES('${patient.last_name}', '${patient.first_name}', '${patient.adress}', '${patient.both_date}' ,'${patient.phone_number}', '${patient.sex}')`;
                connection.query(sql, (err, result) => {
                    connection.end();
                    callback(err, result);
                });
            }
        });
    },

    put: (patient, callback) => {

        const connection = mysql.createConnection(appConfig.connection.config);
        connection.connect(err => {
            if (!err) {
                // const sql = `UPDATE patient SET (last_name = ?, first_name = ?, adress = ?, both_date ?, phone_number ?, sex = ?) WHERE id = ? ('${patient.last_name}', '${patient.first_name}', '${patient.adress}', '${patient.both_date}', '${patient.phone_number}', '${patient.sex}')`;
                // const sql = `UPDATE patient SET last_name = ?, first_name = ?, adress = ?, both_date = ?, phone_number = ?, sex = ? WHERE id = ?`;
                const sql = `
	UPDATE patient SET 
	last_name = "${patient.last_name}", 
    first_name = "${patient.first_name}", 
	adress = "${patient.adress}", 
	both_date = "${patient.both_date}", 
	phone_number = "${patient.phone_number}",
    sex = "${patient.sex}"
	WHERE id = "${patient.id}"
	`;
                connection.query(sql, (err, result) => {
                    connection.end();
                    callback(err, result);

                });
            }
        })
    },


    delete: (patient, callback) => {
        const connection = mysql.createConnection(appConfig.connection.config);
        connection.connect(err => {
            if (!err) {
                const sql = `DELETE FROM patient WHERE id = ?`;
                connection.query(sql, [patient.id], (err, result) => {
                    connection.end(); // il est important de clore la connexion lorsque l'opération est terminée
                    callback(err, result);

                });
            } else {
                callback(err, null);
            }
        });
    },
    get: (callback) => {
        const connection = mysql.createConnection(appConfig.connection.config);
        connection.connect(err => {
            if (!err) {
                const sql = `SELECT * FROM patient`;
                connection.query(sql, (err, data) => {
                    connection.end();
                    callback(err, data);

                });
            }
        })
    },








}

