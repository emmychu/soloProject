const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');

router.get('/', plantController.getAllPlants, (req, res) => {
  return res.status(200).json({ plants: res.locals.plants });
});

router.delete('/plant', plantController.deletePlant, (req, res) => {
  return res.status(200).json('deleted');
});

router.post('/plant', plantController.addPlant, (req, res) => {
  return res.status(200).json(res.locals.newPlant);
});

router.put('/plant', plantController.updatePlant, (req, res) => {
  return res.status(200).json(res.locals.updated);
});

module.exports = router;
