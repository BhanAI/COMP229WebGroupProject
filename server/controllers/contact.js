/*File Name: contact.js   Student: Betty Han    Student ID:301202325   Date: 2022.10.20*/
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create reference to the model (dbschema )
let Contact = require("../models/contact");

module.exports.displayContactList = (req, res, next) => {
  Contact.find((err, contactList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(contactList);
      sortedContacts = contactList.sort((a,b) => (a.contactName > b.contactName) ? 1 : ((b.contactName > a.contactName) ? -1 : 0))
      res.render("contact/list", {
        title: "Contacts",
        ContactList: sortedContacts,
        displayName: req.user ? req.user.displayName : "",
      });
      //render contact.ejs and pass title and Contactlist variable we are passing contactList object to ContactList property
    }
  });
};

module.exports.addpage = (req, res, next) => {
  res.render("contact/add", {
    title: "Add Contact",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.addprocesspage = (req, res, next) => {
  let newContact = Contact({
    contactName: req.body.contactName,
    contactNumber: req.body.contactNumber,
    emailAddress: req.body.emailAddress,
  });
  Contact.create(newContact, (err, Contact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the contact list
      res.redirect("/contact-list");
    }
  });
};

module.exports.displayupdatepage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  Contact.findById(id, (err, contacttoupdate) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the update view
      res.render("contact/update", {
        title: "Edit Contact",
        contact: contacttoupdate,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.processingupdatepage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  let updatecontact = Contact({
    _id: id,
    contactName: req.body.contactName,
    contactNumber: req.body.contactNumber,
    emailAddress: req.body.emailAddress,   
  });
  Contact.updateOne({ _id: id }, updatecontact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the contact list
      res.redirect("/contact-list");
    }
  });
};

module.exports.deletepage = (req, res, next) => {
  let id = req.params.id;
  Contact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh contact list
      res.redirect("/contact-list");
    }
  });
};
