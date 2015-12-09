var express    = require("express");
var app        = express();
var components = require("./components");
var bodyParser = require("body-parser");
var cors       = require("cors");
var morgan     = require("morgan");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(__dirname+"/static"));
app.use(components);

console.log("Server en localhost:3000");
app.listen(3000);