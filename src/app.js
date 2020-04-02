const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const env = require("./env");
const router = express.Router();

//Rotas
const index = require("../routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", index);
app.env = env;

module.exports = app;
