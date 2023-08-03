const { data } = require("jquery");
const appconfig = require("../config/appconfig");
const appConfig = require("../config/appconfig");
const mysql = require('mysql');
module.exports = {



    save: (test_request, callback) => {
        const connection = mysql.createConnection(appConfig.connection.config);
        connection.connect(err => {
            if (err) {
                callback(err, null);
            } else {
                const sql = `INSERT INTO test_request(testRequest_name, testRequest_date, testRequest_statut) VALUES('${test_request.testRequest_name}', '${test_request.test_request_date}', '${test_request.testRequest_statut}')`;
                connection.query(sql, (err, result) => {
                    connection.end();
                    callback(err, result);
                });
            }
        });
    },

    put: (test_request, callback) => {

        const connection = mysql.createConnection(appConfig.connection.config);
        connection.connect(err => {
            if (!err) {
               
               
                const sql = `
	UPDATE test_request SET 
	testRequest_name = "${test_request.testRequest_name}", 
    testRequest_date = "${test_request.testRequest_date}", 
	testRequest_statut = "${test_request.testRequest_statut}" 
	
	WHERE id = "${test_request.id}"
	`;
                connection.query(sql, (err, result) => {
                    connection.end();
                    callback(err, result);

                });
            }
        })
    },


    delete: (test_request, callback) => {
        const connection = mysql.createConnection(appConfig.connection.config);
        connection.connect(err => {
            if (!err) {
                const sql = `DELETE FROM test_request WHERE id = ?`;
                connection.query(sql, [test_request.id], (err, result) => {
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
                const sql = `SELECT * FROM test_request`;
                connection.query(sql, (err, data) => {
                    connection.end();
                    callback(err, data);

                });
            }
        })
    },








}

