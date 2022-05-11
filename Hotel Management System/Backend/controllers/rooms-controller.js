const Room = require("../model/Room");

const getAllRooms = async (req, res, next) => {
  let rooms;
  try {
    rooms = await Room.find();
  } catch (err) {
    console.log(err);
  }

  if (!rooms) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ rooms });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let room;
  try {
    room = await Room.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!room) {
    return res.status(404).json({ message: "No Room found" });
  }
  return res.status(200).json({ room });
};

const addRoom = async (req, res, next) => {
  const { name, rating, description, price, available, image } = req.body;
  let room;
  try {
    room = new Room({
      name,
      rating,
      description,
      price,
      available,
      image,
    });
    await room.save();
  } catch (err) {
    console.log(err);
  }

  if (!room) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ room });
};

const updateRoom = async (req, res, next) => {
  const id = req.params.id;
  const { name, rating, description, price, available, image } = req.body;
  let room;
  try {
    room = await Room.findByIdAndUpdate(id, {
      name,
      rating,
      description,
      price,
      available,
      image,
    });
    room = await room.save();
  } catch (err) {
    console.log(err);
  }
  if (!room) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ room });
};

const deleteRoom = async (req, res, next) => {
  const id = req.params.id;
  let room;
  try {
    room = await Room.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!room) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllRooms = getAllRooms;
exports.addRoom = addRoom;
exports.getById = getById;
exports.updateRoom = updateRoom;
exports.deleteRoom = deleteRoom;
