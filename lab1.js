// Set up Express framework and express-validator library
const express = require("express");
const app = express();
const { query, matchedData, validationResult } =
    require('express-validator');

// Implement requests, e.g., http://localhost:3000/invoices?id=1
app.get('/invoices',
  query('id').isInt({min: 1, max: 9999}),

  (req, res) => { // Execute this code if /invoices seen
    const result = validationResult(req); // Retrieve errors
    if (result.isEmpty()) { // No errors
      const data = matchedData(req); // Retrieve matching data
      return res.send(`You requested invoice id ${data.id}!`);
    }
    res.status(422).send(`Invalid input`);
  })
