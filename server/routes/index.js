/*File Name: index.js   Student: Betty Han    Student ID:301202325   Date: 2022.10.20*/
var express = require('express');
var router = express.Router();

let indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.displayHomepage);

/* GET home page. */
router.get("/home", indexController.displayHomepage);

/* GET About Us page. */
router.get("/about", indexController.displayaboutpage);

/* GET Products page. */
router.get("/projects", indexController.displayprojectpage);

/* GET Services page. */
router.get("/services", indexController.displayservicespage);

/* GET Contact Us page. */
router.get("/contactMe", indexController.displayContactpage);

/* GET Route for displaying the Login page */
router.get("/login", indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post("/login", indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get("/register", indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post("/register", indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get("/logout", indexController.performLogout);

module.exports = router;