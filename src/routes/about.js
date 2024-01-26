// src/routes/about.js
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  const aboutPath = path.join(__dirname, '../views/about.html');
  res.sendFile(aboutPath);
});

module.exports = router;
