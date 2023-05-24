const express = require('express');
const router = express.Router();



router.get("/", (req, res, next) => {
  res.json({
    "name": "myName jon",
    "age": 23,
    "url": "http://loclahost.com"
  })
})




module.exports = router;