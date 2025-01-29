// Set up Express framework and express-validator library
const express = require("express");
const app = express();
const { query, matchedData, validationResult } =
    require('express-validator');

// Implement requests, e.g., http://localhost:3000/parts?id=1
app.get('/parts',
        
query('id').isLength({ max: 80 }).matches(/^[A-Z]{2}-\d+-\d+$/),


  (req, res) => { // Execute this code if /invoices seen
    const result = validationResult(req); // Retrieve errors
    if (result.isEmpty()) { // No errors
      const data = matchedData(req); // Retrieve matching data
      return res.send(`You requested part id ${data.id}!`);
    }
    res.status(422).send(`Invalid input`);
  })
