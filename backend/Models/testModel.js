

class Test {
    constructor(obj = {}) {
        this.id = obj.id;
        this. id_test_type = obj. id_test_type;
        this. test_name = obj. test_name;
        this.test_description = obj.test_description;
        this.test_price  = obj.test_price ;
        this. min_time_frame = obj. min_time_frame;
        this. max_time_frame = obj. max_time_frame;
        
    }
}

module.exports = Test;