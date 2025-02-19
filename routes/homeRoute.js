const express = require("express");
const HomeController = require("../controllers/homeController");

const routerHome = express.Router();
let ctrl = new HomeController();

routerHome.get('/', ctrl.home)

module.exports = router;