

class patient {
    constructor(obj = {}) {
        this.id = obj.id;
        this.lastName = obj.lastName;
        this.firstName = obj.firstName;
        this.address = obj.address;
        this.bothDate = obj.bothDate
        this.phoneNumber = obj.phoneNumber;
        this.sex = obj.sex;
        
    }
}

module.exports = patient;