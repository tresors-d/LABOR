const { data } = require("jquery");
const appconfig = require("../config/appconfig");
const appConfig = require("../config/appconfig");
const mysql = require('mysql');
module.exports = {



    save: (test, callback) => {
        const connection = mysql.createConnection(appConfig.connection.config);
        connection.connect(err => {
            if (err) {
                callback(err, null);
            } else {
                const sql = `INSERT INTO test(id_test_type, test_name, test_description, test_price, min_time_frame, max_time_frame) VALUES('${test.id_test_type}', '${test.test_name}', '${test.test_description}', '${test. test_price}' ,'${test.min_time_frame}', '${test.max_time_frame}')`;
                connection.query(sql, (err, result) => {
                    connection.end();
                    callback(err, result);
                });
            }
        });
    },

    put: (test, callback) => {

        const connection = mysql.createConnection(appConfig.connection.config);
        connection.connect(err => {
            if (!err) {
                
               
                const sql = `
	UPDATE test SET 
	id_test_type = "${test.id_test_type}", 
    test_name = "${test. test_name}", 
    test_description = "${test. test_description}", 
	test_price = "${test.test_price}", 
	min_time_frame = "${test.min_time_frame}",
    max_time_frame = "${test.max_time_frame}"
	WHERE id = "${test.id}"
	`;
                connection.query(sql, (err, result) => {
                    connection.end();
                    callback(err, result);

                });
            }
        })
    },


    delete: (test, callback) => {
        const connection = mysql.createConnection(appConfig.connection.config);
        connection.connect(err => {
            if (!err) {
                const sql = `DELETE FROM test WHERE id = ?`;
                connection.query(sql, [test.id], (err, result) => {
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
                const sql = `SELECT * FROM test`;
                connection.query(sql, (err, data) => {
                    connection.end();
                    callback(err, data);

                });
            }
        })
    },








}

