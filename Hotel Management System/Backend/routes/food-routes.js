const express = require("express");
const router = express.Router();
const Food = require("../model/Food");
const foodsController = require("../controllers/foods-controller");

router.get("/", foodsController.getAllFoods);
router.post("/", foodsController.addFood);
router.get("/:id", foodsController.getById);
router.put("/:id", foodsController.updateFood);
router.delete("/:id", foodsController.deleteFood);

module.exports = router;
