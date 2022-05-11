const express = require("express");
const router = express.Router();
const Salary = require("../model/Salary");
const salaryController = require("../controllers/salarys-controller");

router.get("/", salaryController.getAllSalarys);
router.post("/", salaryController.addSalary);
router.get("/:id", salaryController.getById);
router.put("/:id", salaryController.updateSalary);
router.delete("/:id", salaryController.deleteSalary);

module.exports = router;
