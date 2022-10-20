/*File Name: contact.js   Student: Betty Han    Student ID:301202325   Date: 2022.10.20*/
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let contactModel = mongoose.Schema(
  {
    contactName: String,
    contactNumber: String,
    emailAddress: String,   
  },

  {
    collection: "contacts",
  }
);

module.exports = mongoose.model("Contact", contactModel);
