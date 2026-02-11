const express = require("express");
const router = express.Router();
const SoilRecord = require("../models/SoilRecord");

// Save soil record
router.post("/save", async (req, res) => {
  try {
    const record = new SoilRecord(req.body);
    await record.save();
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get historical data
router.get("/history", async (req, res) => {
  const { state, district } = req.query;

  try {
    const records = await SoilRecord.find({ state, district });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
