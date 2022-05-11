const Dilivary = require("../model/Dilivary");

const getAllDilivarys = async (req, res, next) => {
  let dilivarys;
  try {
    dilivarys = await Dilivary.find();
  } catch (err) {
    console.log(err);
  }

  if (!dilivarys) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ dilivarys });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let dilivary;
  try {
    dilivary = await Dilivary.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!dilivary) {
    return res.status(404).json({ message: "No Dilivary found" });
  }
  return res.status(200).json({ dilivary });
};

const addDilivary = async (req, res, next) => {
  const { name, email, address, available, image } = req.body;
  let dilivary;
  try {
    dilivary = new Dilivary({
      name,
      
      email,
      address,
      available,
      image,
    });
    await dilivary.save();
  } catch (err) {
    console.log(err);
  }

  if (!dilivary) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ dilivary });
};

const updateDilivary = async (req, res, next) => {
  const id = req.params.id;
  const { name, email, address, available, image } = req.body;
  let dilivary;
  try {
    dilivary = await Dilivary.findByIdAndUpdate(id, {
      name,
      
      email,
      address,
      available,
      image,
    });
    dilivary = await dilivary.save();
  } catch (err) {
    console.log(err);
  }
  if (!dilivary) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ dilivary });
};

const deleteDilivary = async (req, res, next) => {
  const id = req.params.id;
  let dilivary;
  try {
    dilivary = await Dilivary.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!dilivary) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllDilivarys = getAllDilivarys;
exports.addDilivary = addDilivary;
exports.getById = getById;
exports.updateDilivary = updateDilivary;
exports.deleteDilivary = deleteDilivary;