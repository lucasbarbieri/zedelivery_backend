const connectionString = require("../../../db");
const mongoose = require("mongoose");

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("useCreateIndex", true);

const schema = new mongoose.Schema({
  tradingName: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  document: {
    type: String,
    required: true,
  },
  coverageArea: {
    type: {
      type: String,
    },
    coordinates: [],
  },
  address: {
    type: { type: String },
    coordinates: [],
  },
});

schema.index({ address: "2dsphere" });

module.exports = mongoose.model("Partners", schema);
