const patientRouter = require ("./backend/routes/patientroute");
const testRequestRouter = require ("./backend/routes/test_requestroute");
const test_typeRouter = require ("./backend/routes/test_typeroute");
const testRouter = require ("./backend/routes/testroute");
const express = require('express');

//integration du template en dans nodejs

const expressLayouts = require('express-ejs-layouts');
const app = express();
const path = require("path");
const homeRouter = require('./backend/routes/homeroute');


app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRouter.routes);


app.use(express.json());
app.use(express.urlencoded({extended: false}));




const http = require('http');
const Test_type = require("./backend/Models/test_typeModel");


//reglage du moteur de la vue sur ejs
app.set("view engine", "ejs"); 
app.set('views', './views')
app.use(express.static('public'));




app.set('port', process.env.PORT || 3000 , function () {
    
});
 app.use('/patient', patientRouter);
  
 
//  app.get('/', function(req, res) {
//     res.render('test');
//   });

 app.use('/test_request', testRequestRouter);
 app.use('/test_type', test_typeRouter);
  app.use('/test', testRouter);
 




const server = http.createServer(app);

server.listen(process.env.PORT || 3000 );