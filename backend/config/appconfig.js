
const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "laboratoire",
});

//  connection.connection((error) => {
//     if (error) throw error;
//     console.log('Connected to MySQL database!');
//   });

 module.exports = {
   connection: conn
 }
