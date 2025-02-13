const express = require("express");
const helmet  = require("helmet");


const app = express();

// Use Helmet to insert hardening headers
app.use(helmet({
  contentSecurityPolicy: {
      directives: {
          "script-src": ["'self'", "https://example.com"],
          "style-src": ["'self'"]
      }
  }
}));


app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000);
