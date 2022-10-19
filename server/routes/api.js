const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');

router.get('/', plantController.getAllPlants, (req, res) =>
  res.status(200).send({ plants: res.locals.plants })
);

router.get('/:plant', (req, res) => res.status(200));

router.post('/plant', plantController.addPlant, (req, res) => {
  return res.status(200).json('added');
});

module.exports = router;
