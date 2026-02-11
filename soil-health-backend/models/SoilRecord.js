const mongoose = require("mongoose");

const SoilRecordSchema = new mongoose.Schema({
  state: String,
  district: String,
  nitrogen: Number,
  phosphorus: Number,
  potassium: Number,
  rainfall: Number,
  temperature: Number,
  fertilizerType: String,
  fertilizerQty: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("SoilRecord", SoilRecordSchema);
