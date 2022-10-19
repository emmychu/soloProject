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
    const newPlant = await plant.Plant.create(req.query);
    next();
  } catch (error) {
    console.log('error', error);
  }
};

module.exports = plantController;
