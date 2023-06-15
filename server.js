const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

app.listen(port, () => {
  console.log("server is running on port 5000");
});

// CONTACT BASE ROUTE
app.use("/api/contacts", require("./routes/contactRoute"));
