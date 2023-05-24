const express = require('express');
const router = express.Router();



router.get("/", (req, res, next) => {
  res.status(404)
  res.json({
    "myName": "John"
  })
})




module.exports = router;