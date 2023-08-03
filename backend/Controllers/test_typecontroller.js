const Test_type = require("../Models/test_typeModel");
const test_typeDao = require("../Dao/test_typeDao");
const appconfig = require("../config/appconfig");
const appConfig = require("../config/appconfig");

module.exports = {
    createTest_type: (req, res, next) => {
        console.log(req.body.both_date)
        

        const test_type = new Test_type({
            id: req.params.id,
            testType_name: req.body.testType_name,
           

        })
        const action = req.body.action;

        if (action === 'Save') {
            test_typeDao.save(test_type, (err, result) => {

                if (err) {
                    console.log(err);
                    res.json(err);

                } else {


                    console.log(`test_type created successfully with ID ${result.insertId}. Details...`);
                    console.log(result);

                    res.redirect("/test_type");


                }


            });
        } else if (action === 'Update') {
            test_typeDao.put(test_type, (err, result) => {

                if (err) {
                    console.log(err);
                    res.json(err);
                } else {
                    console.log(`test_type update successfully with ID ${result.updateId}. Details...`);
                    console.log(result);
                    res.redirect("/test_type")







                }
            })
        }
    },

    modifyTest_type: (req, res, next) => {
        const id = req.params.id;
        test_typeDao.get((err, data) => {
            const test_typeList = [];
            if (err) {

                console.log(err);
                req.json(err);
            } else {
                data.forEach(it => test_typeList.push(it))
            }
            var test_typeToUpdate;
            test_typeList.forEach(function (test_type) {
                if (test_type.id == req.params.id) {
                    test_typeToUpdate = test_type;
                }
            })
            res.render('test_type', {

                test_typeToUpdate: test_typeToUpdate,
                test_types: test_typeList

            })



        })
    },




    deleteTest_type: (req, res, next) => {
        const id = req.params.id;
        test_typeDao.delete({ id: id }, (err, result) => {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log('test_type delete');
                console.log(`test_type deleted successfully with ID ${id}. Details...`);
                console.log(result);
                res.redirect("/test_type");
            }
        });

    },

    getTest_types: (req, res) => {
        test_typeDao.get((err, data) => {
            const test_typeList = [];
            if (err) {

                console.log(err);
                req.json(err);
            } else {
                
                data.forEach(it => test_typeList.push(it))

            }
            console.log(test_typeList)
            res.render('test_type', {
                test_types: test_typeList
            })
        })
    }






}