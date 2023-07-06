const appConfig = require("../config/appconfig");

module.exports = {
    save: (patient, callback) => {
        const connection = appConfig.connection;
        connection.connect(err => {
            if(!err) {
                const sql = `INSERT INTO patient(last_name, first_name, adress, both_date, phone_number, sex) VALUES('${patient.lastName}', '${patient.firstName}', '${patient.address}', '${patient.bothDate}' '${patient.phoneNumber}', '${patient.sex}')`;
                connection.query(sql, (err, result) => {
                    callback(err, result);
                });
            }
        })
    }
}
