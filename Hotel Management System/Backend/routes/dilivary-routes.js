const express = require("express");
const router = express.Router();
const Dilivary = require("../model/Dilivary");
const dilivarysController = require("../controllers/dilivarys-controller");

router.get("/", dilivarysController.getAllDilivarys);
router.post("/", dilivarysController.addDilivary);
router.get("/:id", dilivarysController.getById);
router.put("/:id", dilivarysController.updateDilivary);
router.delete("/:id", dilivarysController.deleteDilivary);

module.exports = router;