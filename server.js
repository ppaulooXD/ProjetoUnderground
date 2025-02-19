const express = require("express");
const routerHome = require("./routes/homeRoute");
const routerLink = require("./routes/linkRoute");
const routerUgo = require("./routes/ugoRoute");
const routerChard = require("./routes/chardRoute");
const routerEf = require("./routes/efRoute");
const expressEjsLayout = require("express-ejs-layouts");
const app = express();

app.use('/public', express.static(__dirname + "/public"));

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.set("layout", "./layout.ejs");
app.use(expressEjsLayout);
app.use("/", routerHome);

app.get("/link", routerLink);
app.get("/ugo", routerUgo);
app.get("/chard", routerChard);
app.get("/ef", routerEf);

app.listen(5000, function(){
    console.log("Sistema em Execução!");
})