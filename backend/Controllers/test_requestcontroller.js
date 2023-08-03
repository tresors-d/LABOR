const Test_request = require("../Models/test_requestModel");
const test_requestDao = require("../Dao/test_requestDao");
const appconfig = require("../config/appconfig");
const appConfig = require("../config/appconfig");

module.exports = {
    createTest_request: (req, res, next) => {
        console.log(req.body)

        const test_request = new Test_request({
            id: req.params.id,
            testRequest_name: req.body.testRequest_name,
            testRequest_date: req.body.testRequest_date,
            testRequest_statut: req.body.testRequest_statut,
           


        })
        const action = req.body.action;

        if (action === 'Save') {
            test_requestDao.save(test_request, (err, result) => {

                if (err) {
                    console.log(err);
                    res.json(err);

                } else {


                    console.log(`test_request created successfully with ID ${result.insertId}. Details...`);
                    console.log(result);

                    res.redirect("/test_request");


                }


            });
        } else if (action === 'Update') {
            test_requestDao.put(test_request, (err, result) => {

                if (err) {
                    console.log(err);
                    res.json(err);
                } else {
                    console.log(`test_request update successfully with ID ${result.updateId}. Details...`);
                    console.log(result);
                    res.redirect("/testRequest")







                }
            })
        }
    },

    modifyTest_request: (req, res, next) => {
        const id = req.params.id;
        test_requestDao.get((err, data) => {
            const test_requestList = [];
            if (err) {

                console.log(err);
                req.json(err);
            } else {
                data.forEach(it => test_requestList.push(it))
            }
            var test_requestToUpdate;
            test_requestList.forEach(function (test_request) {
                if (test_request.id == req.params.id) {
                    test_requestToUpdate = test_request;
                }
            })
            res.render('test_request', {

                test_requestToUpdate: test_requestToUpdate,
                test_requests: test_requestList

            })



        })
    },




    deleteTest_request: (req, res, next) => {
        const id = req.params.id;
        test_requestDao.delete({ id: id }, (err, result) => {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                console.log('test_request delete');
                console.log(`test_request deleted successfully with ID ${id}. Details...`);
                console.log(result);
                res.redirect("/test_request");
            }
        });

    },

    getTest_request: (req, res) => {
        test_requestDao.get((err, data) => {
            const test_requestList = [];
            if (err) {

                console.log(err);
                // req.json(err);
            } else {
                data.forEach(it => test_requestList.push(it))

            }

            res.render('test_request', {
                test_requests: test_requestList
            })
        })
    }






}