// src/index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

const homeRoute = require('./routes/home');
const aboutRoute = require('./routes/about');

app.use('/', homeRoute);
app.use('/about', aboutRoute);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
