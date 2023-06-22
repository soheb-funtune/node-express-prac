const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const app = express();
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;
connectDB();
app.use(errorHandler);
app.use(express.json());
// CONTACT BASE ROUTE
app.use("/api/contacts", require("./routes/contactRoute"));
app.use("/api/users", require("./routes/userRoute"));

app.listen(port, () => {
  console.log("server is running on port 5000");
});
