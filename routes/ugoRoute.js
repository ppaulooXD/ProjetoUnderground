const express = require("express");
const ugoController = require("../controllers/ugoController");

const routerUgo = express.Router();
let ctrl = new ugoController();

routerUgo.get('/ugo', ctrl.ugo);

module.exports = routerUgo;