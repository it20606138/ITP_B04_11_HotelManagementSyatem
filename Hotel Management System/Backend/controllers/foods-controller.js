const Food = require("../model/Food");

const getAllFoods = async (req, res, next) => {
  let foods;
  try {
    foods = await Food.find();
  } catch (err) {
    console.log(err);
  }

  if (!foods) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ foods });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let food;
  try {
    food = await Food.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!food) {
    return res.status(404).json({ message: "No Food found" });
  }
  return res.status(200).json({ food });
};

const addFood = async (req, res, next) => {
  const { name, description, price, available, image } = req.body;
  let food;
  try {
    food = new Food({
      name,
      
      description,
      price,
      available,
      image,
    });
    await food.save();
  } catch (err) {
    console.log(err);
  }

  if (!food) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ food });
};

const updateFood = async (req, res, next) => {
  const id = req.params.id;
  const { name, description, price, available, image } = req.body;
  let food;
  try {
    food = await Food.findByIdAndUpdate(id, {
      name,
      
      description,
      price,
      available,
      image,
    });
    food = await food.save();
  } catch (err) {
    console.log(err);
  }
  if (!food) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ food });
};

const deleteFood = async (req, res, next) => {
  const id = req.params.id;
  let food;
  try {
    food = await Food.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!food) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllFoods = getAllFoods;
exports.addFood = addFood;
exports.getById = getById;
exports.updateFood = updateFood;
exports.deleteFood = deleteFood;
