const router = require("express").Router();
let employeeSalary = require("../models/EmployeeSalary");

//add salarys
router.route("/add").post((req,res)=>{

    const emp_id = req.body.emp_id;
    const noOfworkingDays = Number(req.body.noOfworkingDays);
    const totalOtDays = Number(req.body.totalOtDays);
    const totalLeaveDays= Number(req.body.totalLeaveDays);
    const FixedSalary = Number(req.body. FixedSalary);
    const AdditionalPayment = Number(req.body.AdditionalPayment);
    const bonus = Number(req.body.bonus);
    const total = Number(req.body.total);
    

    const newEmployeeSalary = new employeeSalary({

        emp_id,
        noOfworkingDays,
        totalOtDays,
        totalLeaveDays,
        FixedSalary,
        AdditionalPayment,
        bonus,
        total
    })

    newEmployeeSalary.save().then(()=>{
        res.json("Employee Salary Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//fetch all salarys
router.route("/").get((req,res)=>{

    employeeSalary.find().then((employeeSalarys)=>{
        res.json(employeeSalarys)
    }).catch((err)=>{
        console.log(err)
    })
})


//Update
router.route("/update/:id").put(async(req,res)=>{

    let userId = req.params.id;
    const { emp_id,noOfworkingDays, totalOtDays, totalLeaveDays, FixedSalary,AdditionalPayment,bonus,total} = req.body;

    const updateEmployeeSalary = {
        emp_id,
        noOfworkingDays,
        totalOtDays,
        totalLeaveDays,
        FixedSalary,
        AdditionalPayment,
        bonus,
        total,
    }

    const update = await employeeSalary.findByIdAndUpdate(userId,updateEmployeeSalary).then(() => {
        res.status(200).send({status:"Salary updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})


//Delete
router.route("/delete/:id").delete(async(req,res) => {
    let userId = req.params.id;

    await employeeSalary.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status : "Salary deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status : "Error with delete salary", error: err.message});
    })
})

//fetch on employee identified by the id
router.route("/get/:id").get(async (req,res) => {
    let userId = req.params.id;

    const user = await employeeSalary.findById(userId).then((employeeSalary) => {
        res.status(200).send({status : "Payment fetched", employeeSalary})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status : "Error with get salary", error : err.message});
    })
})


module.exports = router;
