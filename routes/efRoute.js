const express = require("express");
const efController = require("../controllers/efController");

const routerEf = express.Router();
let ctrl = new efController();

routerEf.get('/ef', ctrl.ef);

module.exports = routerEf;