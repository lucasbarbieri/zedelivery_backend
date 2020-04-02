const env = require("dotenv").config({
  path: process.env.NODE_ENV ? ".env.${process.env.NODE_ENV}" : ".env"
});
module.exports = env.parsed;
