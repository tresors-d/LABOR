

class Patient {
    constructor(obj = {}) {
        this.id = obj.id;
        this.last_name = obj.last_name;
        this.first_name = obj.first_name;
        this.adress = obj.adress;
        this.both_date = obj.both_date
        this.phone_number = obj.phone_number;
        this.sex = obj.sex;
        
    }
}

module.exports = Patient;