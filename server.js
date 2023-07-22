const patientRouter = require ("./backend/routes/patientroute");
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


//reglage du moteur de la vue sur ejs
app.set("view engine", "ejs"); 
app.set('views', './views')
app.use(express.static('public'));


//route pour aller a la page patient
// app.get("/patient", function (req, res) {
//     res.render("patient");
// });
// app.get("/index", function(req, res) {
//     res.render("index");
// });
// app.get('/', (req, res) => {
//     res.send('bonjour tous')
//   });



app.set('port', process.env.PORT || 3000 , function () {
    
});
 app.use('/patient', patientRouter);
 //app.use('/patientupdate', patientRouter);
//  app.get("/update", function(req, res) {
//     res.render("update");
// });
 
 


 




const server = http.createServer(app);

server.listen(process.env.PORT || 3000 );