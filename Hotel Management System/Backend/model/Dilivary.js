const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dilivarySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Dilivary", dilivarySchema);
