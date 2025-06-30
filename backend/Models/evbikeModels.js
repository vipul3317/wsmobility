const mongoose = require('mongoose');

const evBikeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  specifications: {
    motor: String,
    speed: String,
    controller: String,
    range: String,
    breakSystem: String,
    battery: String,
    chargerSpec: String,
    chargingTime: String,
  },
  features: [String],
}, {
  timestamps: true,
});

const EvBikeModel = mongoose.model('EvBike', evBikeSchema);
module.exports = EvBikeModel;