const express = require("express");
const router = express.Router();

const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// we can also write like this "GET and POST" combinelly
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

// router.get("/",(req,res)=>())   we can also write like this
// router.route("/").get(getContacts);
// router.route("/:id").get(getContact);
// router.route("/").post(createContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);

module.exports = router;
