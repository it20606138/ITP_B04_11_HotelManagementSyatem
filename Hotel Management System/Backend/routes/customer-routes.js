const express = require("express");
const router = express.Router();
const Customer = require("../model/Customer");
const customersController = require("../controllers/customers-controller");

router.get("/", customersController.getAllCustomers);
router.post("/", customersController.addCustomer);
router.get("/:id", customersController.getById);
router.put("/:id", customersController.updateCustomer);
router.delete("/:id", customersController.deleteCustomer);

module.exports = router;
