const appConfig = require("../config/app-config");

module.exports = {
    save: (user, callback) => {
        const connection = appConfig.connection;
        connection.connect(err => {
            if(!err) {
                const sql = `INSERT INTO user(last_name, first_name, adress, phone_number, password_u) VALUES('${user.lastName}', '${user.firstName}', '${user.address}', ${user.phoneNumber}, '${user.password}')`;
                connection.query(sql, (err, result) => {
                    callback(err, result);
                });
            }
        })
    }
}