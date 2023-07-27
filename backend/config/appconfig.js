
// const mysql = require("mysql");
 const myconnection = require('express-myconnection');

// const conn = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "laboratoire",
// });

// //  connection.connection((error) => {
// //     if (error) throw error;
// //     console.log('Connected to MySQL database!');
// //   });

//  module.exports = {
//    connection: conn
//  }
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "laboratoire",
});

module.exports = {
   connection: connection
}