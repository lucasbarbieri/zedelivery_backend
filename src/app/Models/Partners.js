const env = require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const schema = new mongoose.Schema({
  tradingName: String,
  ownerName: String,
  documento: String,
  cobertura: Object,
  address: Object
});

schema.index({ address: "2dsphere" });

module.exports = mongoose.model("Partners", schema);
