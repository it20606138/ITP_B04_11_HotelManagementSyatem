const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSalarySchema = new Schema({


    emp_id : {
        type : String,
        required : true
    },

    noOfworkingDays : {
        type : Number,
        required : true
    },

    totalOtDays : {
        type : Number,
        required : true
    },

    totalLeaveDays : {
        type : Number,
        required : true
    },

    FixedSalary : {
        type : Number,
        required : true
    },

    AdditionalPayment : {
        type : Number,
        required : true
    },

    bonus : {
        type : Number,
        required : true
    },

    total : {
        type : Number,
        required : true
    }

})


const EmployeeSalary = mongoose.model("EmployeeSalary", EmployeeSalarySchema);

module.exports = EmployeeSalary;
