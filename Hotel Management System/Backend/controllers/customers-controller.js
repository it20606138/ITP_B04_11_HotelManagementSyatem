const Customer = require("../model/Customer");

const getAllCustomers = async (req, res, next) => {
  let customers;
  try {
    customers = await Customer.find();
  } catch (err) {
    console.log(err);
  }

  if (!customers) {
    return res.status(404).json({ message: "No customer found" });
  }
  return res.status(200).json({ customers });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let customer;
  try {
    customer = await Customer.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!customer) {
    return res.status(404).json({ message: "No Customer found" });
  }
  return res.status(200).json({ customer });
};

const addCustomer = async (req, res, next) => {
  const { name, email, mobile, checkin, checkout, image } = req.body;
  let customer;
  try {
    customer = new Customer({
      name,
      email,
      mobile,
      checkin,
      checkout,
      image,
    });
    await customer.save();
  } catch (err) {
    console.log(err);
  }

  if (!customer) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ customer });
};

const updateCustomer = async (req, res, next) => {
  const id = req.params.id;
  const { name, email, mobile, checkin, checkout, image } = req.body;
  let customer;
  try {
    customer = await Customer.findByIdAndUpdate(id, {
      name,
      email,
      mobile,
      checkin,
      checkout,
      image,
    });
    customer = await customer.save();
  } catch (err) {
    console.log(err);
  }
  if (!customer) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ customer });
};

const deleteCustomer = async (req, res, next) => {
  const id = req.params.id;
  let customer;
  try {
    customer = await Customer.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!customer) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Booking Successfully Deleted" });
};

exports.getAllCustomers = getAllCustomers;
exports.addCustomer = addCustomer;
exports.getById = getById;
exports.updateCustomer = updateCustomer;
exports.deleteCustomer = deleteCustomer;
