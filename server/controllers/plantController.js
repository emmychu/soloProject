const plant = require('../models/models');
const plantController = {};

plantController.getAllPlants = async (req, res, next) => {
  try {
    const plants = await plant.Plant.find({});
    res.locals.plants = plants;
    next();
  } catch (error) {
    console.log('error', error);
  }
};

plantController.addPlant = async (req, res, next) => {
  try {
    const newPlant = await plant.Plant.create(req.body);
    res.locals.newPlant = newPlant;
    next();
  } catch (error) {
    console.log('error', error);
  }
};

plantController.updatePlant = async (req, res, next) => {
  const search = {};
  if (req.body.oldName) {
    search.name = req.body.oldName;
  } else {
    search.name = req.body.name;
  }
  delete req.body.oldName;
  try {
    const updatedPlant = await plant.Plant.findOneAndUpdate(search, req.body, {
      returnOriginal: false,
    });
    res.locals.updated = updatedPlant;
    return next();
  } catch (error) {
    return res.status(400).send(error);
  }
};

plantController.deletePlant = async (req, res, next) => {
  try {
    await plant.Plant.findOneAndDelete(req.body);
    return next();
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = plantController;
