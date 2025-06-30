const express=require('express');
const evbikeRouter=express.Router();

const EvBike=require('../Models/evbikeModels');

// get all bikes
evbikeRouter.get('/getbikemodels', async (req, res) => {
  try {
    const bikes = await EvBike.find();
    res.json(bikes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new bike
evbikeRouter.post('/postbikemodels', async (req, res) => {
  try {
    const newBike = new EvBike(req.body);
    const saved = await newBike.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = evbikeRouter;