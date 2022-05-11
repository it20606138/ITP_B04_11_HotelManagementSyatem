const express = require("express");
const router = express.Router();
const Room = require("../model/Room");
const roomsController = require("../controllers/rooms-controller");

router.get("/", roomsController.getAllRooms);
router.post("/", roomsController.addRoom);
router.get("/:id", roomsController.getById);
router.put("/:id", roomsController.updateRoom);
router.delete("/:id", roomsController.deleteRoom);

module.exports = router;
