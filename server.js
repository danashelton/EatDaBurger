var express = require("express");
var bodyParser = require("body-parser");
var mOverride = require("method-override");
var PORT = process.env.PORT || 8080;
var app = express();


app.use(express.static("public"));

app.use(mOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_Controller.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

