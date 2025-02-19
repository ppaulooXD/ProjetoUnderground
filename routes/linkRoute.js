const express = require("express");
const linkController = require("../controllers/linkController");

const routerLink = express.Router();
let ctrl = new linkController();

routerLink.get('/link', ctrl.link);

module.exports = routerLink;