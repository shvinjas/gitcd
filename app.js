//app.js
const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (request, response) => {
  response.send("Enrollment Accepted.Initiated Gateway");
});

var PORT = process.env.PORT || 8080;

function selection(credentials, rating) {
  return credentials * rating;
}

app.listen(PORT, () => {
  console.log(`server is listening in ${PORT}`);
});

module.exports = selection;
