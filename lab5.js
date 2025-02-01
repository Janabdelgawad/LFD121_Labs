const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  if (req.cookies.profile) {
    try {
      const base64Decoded = Buffer.from(
        req.cookies.profile, 'base64').toString('utf8');
      
const data = JSON.parse(base64Decoded);


      
if (data.username && typeof data.username == 'string' && data.username.length < 20 ) {

            // To prevent XSS, avoid res.send with untrusted data
            res.render('index', {username: data.username});
      }

    } catch (err) {
      res.send('An error occurred.');
    }
  } else {
    res.send("Please Login");
  }
});
