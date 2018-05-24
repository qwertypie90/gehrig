var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");

var port = process.env.PORT || 3000;

app.use(express.static("public"));
require("./routes/html-routes")(app);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(express.static("public"));

app.listen(port, function() {
    console.log("Your site listening on: " + port);
});