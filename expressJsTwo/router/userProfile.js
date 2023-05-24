const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
  res.status(303);
 
  res.json({
    "name": "userOne",
    "idNumber": 39045,
    "age": 30,
    "Friends": ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  })
})

module.exports = router;