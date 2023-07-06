
const patientcontroller = require ("./backend/Controllers/patientcontroller");
const router = require("./backend/routes/patientroute");

const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

server.listen(process.env.PORT || 3000);