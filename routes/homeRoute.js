const express = require("express");
const homeController = require("../controllers/homeController");

const routerHome = express.Router();
let ctrl = new homeController();

routerHome.get('/', ctrl.home)

module.exports = routerHome;