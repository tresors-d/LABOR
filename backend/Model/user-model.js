class User {
    constructor(obj = {}) {
        this.id = obj.id;
        this.lastName = obj.lastName;
        this.firstName = obj.firstName;
        this.address = obj.address;
        this.phoneNumber = obj.phoneNumber;
        this.password = obj.password;
    }
}

module.exports = User;