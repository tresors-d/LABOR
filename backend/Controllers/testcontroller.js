const Test = require("../Models/testModel");
const testDao = require("../Dao/testDao");
const appconfig = require("../config/appconfig");
const appConfig = require("../config/appconfig");
const test_typeDao = require('../Dao/test_typeDao');

module.exports = {

    // createTest: (req, res, next) => {
    //     test_typeDao.getTest_types((err, test_types) => {
    //       if (err) {
    //         console.log(err);
    //         res.json(err);
    //       } else {
    //         res.render('test', { test_types: test_types });
    //       }
    //     });
    //   },

      createTest: (req, res, next) => {
        console.log(req.body);
        

        const test = new Test({
            id: req.params.id,
            id_test_type: req.body. id_test_type,
            test_name: req.body.test_name,
            test_description: req.body.test_description,
            test_price: req.body.test_price,
            min_time_frame: req.body.min_time_frame,
            max_time_frame: req.body.max_time_frame,
            id: req.body.id,


        })
        const action = req.body.action;


        if (action === 'Save') {
            testDao.save(test, (err, result) => {

                if (err) {
                     console.log(err);
                    res.json(err);

                } else {


                    console.log(`test created successfully with ID ${result.insertId}. Details...`);
                    console.log(result);

                    res.redirect("/test");


                }


            });
        } else if (action === 'Update') {
            testDao.put(test, (err, result) => {

                if (err) {
                    console.log(err);
                    res.json(err);
                } else {
                    console.log(`test update successfully with ID ${result.updateId}. Details...`);
                    console.log(result);
                    res.redirect("/test")







                }
            })
        }
    },

    modifyTest: (req, res, next) => {
        const id = req.params.id;
        testDao.get((err, data) => {
            const testList = [];
            if (err) {

                console.log(err);
                req.json(err);
            } else {
                data.forEach(it => testList.push(it))
            }
            var testToUpdate;
            testList.forEach(function (test) {
                if (test.id == req.params.id) {
                    testToUpdate = test;
                }
            })
            res.render('test', {

                testToUpdate: testToUpdate,
                tests: testList

            })



        })
    },




    deleteTest: (req, res, next) => {
        const id = req.params.id;
        testDao.delete({ id: id }, (err, result) => {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
               
                console.log(`test deleted successfully with ID ${id}. Details...`);
                console.log(result);
                res.redirect("/test");
            }
        });

    },

    // getTests: (req, res) => {
    //     const testList = [];
    //     const typeTests = [];
    //     testDao.get((err, data) => {
            
    //         if (err) {

    //             console.log(err);
    //             req.json(err);
    //         } else {
                
    //             data.forEach(it => testList.push(it))

    //         }
    //         console.log(testList)
            
    //     })
    //     test_typeDao.get((err, data) => {
    //         if (err) {
    //           console.log(err);
    //           res.status(500).json({
    //             message: "Une erreur s'est produite lors de la récupération des types de test."
    //           });
    //         } else {
    //             data.forEach(it => typeTests.push(it))
    //         }
    //         console.log(typeTests)
    //       });
    //     res.render('test', {
    //         tests: testList,
    //         types: typeTests
    //     })
    // },

    getTests: (req, res) => {
        const testList = [];
        const typeTests = [];
    
        testDao.get((err, data) => {
            if (err) {
                console.log(err);
                req.json(err);
            } else {
                data.forEach(it => testList.push(it));
                
                test_typeDao.get((err, data) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json({
                            message: "Une erreur s'est produite lors de la récupération des types de test."
                        });
                    } else {
                        data.forEach(it => typeTests.push(it));
                        
                        res.render('test', {
                            tests: testList,
                            types: typeTests
                        });
                    }
                });
            }
        });
    }

}