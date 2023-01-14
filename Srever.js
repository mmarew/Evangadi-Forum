// We can use express as shown as below

const express = require("express");
let mysql = require("mysql");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
let cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
var connection = mysql.createConnection({
  host:  process.env.HOST,
  user: process.env.USER,
  password: process.env.HOST,
  database: process.env.DATABASENAME,
});

connection.connect();
connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});
connection.end();
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
