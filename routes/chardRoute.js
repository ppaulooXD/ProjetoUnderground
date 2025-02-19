const express = require("express");
const chardController = require("../controllers/chardController");

const routerChard = express.Router();
let ctrl = new chardController();

routerChard.get('/chard', ctrl.chard)

module.exports = routerChard;