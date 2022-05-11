const Salary = require("../model/Salary");

const getAllSalarys = async (req, res, next) => {
  let salarys;
  try {
    salarys = await Salary.find();
  } catch (err) {
    console.log(err);
  }

  if (!salarys) {
    return res.status(404).json({ message: "No salary found" });
  }
  return res.status(200).json({ salarys });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let salary;
  try {
    salary = await Salary.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!salary) {
    return res.status(404).json({ message: "No Salary found" });
  }
  return res.status(200).json({ salary });
};

const addSalary = async (req, res, next) => {
  const { emp_id, years, months, loans, OT,EPF,basic_salary, image } = req.body;
  let salary;
  try {
    salary = new Salary({
      emp_id,
      years,
      months,
      loans,
      OT,
      EPF,
      basic_salary,
      image,
    });
    await salary.save();
  } catch (err) {
    console.log(err);
  }

  if (!salary) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ salary });
};

const updateSalary = async (req, res, next) => {
  const id = req.params.id;
  const {  emp_id, years, months, loans, OT,EPF,basic_salary, image } = req.body;
  let salary;
  try {
    salary = await Salary.findByIdAndUpdate(id, {
      emp_id,
      years,
      months,
      loans,
      OT,
      EPF,
      basic_salary,
      image,
    });
    salary = await salary.save();
  } catch (err) {
    console.log(err);
  }
  if (!salary) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ salary });
};

const deleteSalary = async (req, res, next) => {
  const id = req.params.id;
  let salary;
  try {
    salary = await Salary.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!salary) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Salary Successfully Deleted" });
};

exports.getAllSalarys = getAllSalarys;
exports.addSalary = addSalary;
exports.getById = getById;
exports.updateSalary = updateSalary;
exports.deleteSalary = deleteSalary;
