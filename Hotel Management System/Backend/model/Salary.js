const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const salarySchema = new Schema({
  emp_id: {
    type: String,
    required: true,
  },
  years: {
    type: String,
    required: true,
  },
  months: {
    type: String,
    required: true,
  },
  loans: {
    type: String,
    required: true,
  },

  OT: {
    type: String,
    required: true,
  },

  EPF: {
    type: String,
    required: true,
  },

  basic_salary: {
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

module.exports = mongoose.model("Salary", salarySchema);

// salary
 