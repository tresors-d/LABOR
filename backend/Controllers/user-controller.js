const userDao = require("../Dao/userdao");
const User = require("../Model/user-model");

module.exports = {
    createUser: (req, res) => {
        const user = new User({
            lastName: 'DONGMO',
            firstName: 'Tresor',
            address: 'Mimeto, Dschang',
            phoneNumber: 675302316,
            password: 'admin'
        })
        userDao.save(user, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                //res.render(...) | res.json(...) | ...
                console.log(`User created successfully with ID ${result.insertId}. Details...`);
                console.log(result);
            }
        });
    }
}