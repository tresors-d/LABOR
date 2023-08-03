const { data } = require("jquery");
const appconfig = require("../config/appconfig");
const appConfig = require("../config/appconfig");
const mysql = require('mysql');
module.exports = {



    save: (test_type, callback) => {
        const connection = mysql.createConnection(appConfig.connection.config);
        connection.connect(err => {
            if (err) {
                callback(err, null);
            } else {
                const sql = `INSERT INTO test_type(testType_name) VALUES('${test_type.testType_name}')`;
                connection.query(sql, (err, result) => {
                    connection.end();
                    callback(err, result);
                });
            }
        });
    },

    put: (test_type, callback) => {

        const connection = mysql.createConnection(appConfig.connection.config);
        connection.connect(err => {
            if (!err) {
               
               
                const sql = `
	UPDATE test_type SET 
	testType_name = "${test_type.testType_name}"
   
	WHERE id = "${test_type.id}"
	`;
                connection.query(sql, (err, result) => {
                    connection.end();
                    callback(err, result);

                });
            }
        })
    },


    delete: (test_type, callback) => {
        const connection = mysql.createConnection(appConfig.connection.config);
        connection.connect(err => {
            if (!err) {
                const sql = `DELETE FROM test_type WHERE id = ?`;
                connection.query(sql, [test_type.id], (err, result) => {
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
                const sql = `SELECT * FROM test_type`;
                connection.query(sql, (err, data) => {
                    connection.end();
                    callback(err, data);

                });
            }
        })
    },








}

