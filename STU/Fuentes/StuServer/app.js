var app        = require("express")();
var bodyParser = require("body-parser");
var components = require("./components");


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(components);

console.log("Server en localhost:3000");
app.listen(3000);