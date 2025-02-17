const express = require("express");
const routerHome = require("./routes/homeRoute");
const app = express();

app.use('/public', express.static(__dirname + "/public"));

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use("/", routerHome);

app.listen(5000, function(){
    console.log("Sistema em Execução!");
})