const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(express.static("public"));
 
const handlebars = exphbs.create({extname:".hbs"});
app.engine('hbs',handlebars.engine);
app.set("view engine","hbs");

const routes = require("./server/routes/student");
app.use('/',routes);

app.listen(4200);