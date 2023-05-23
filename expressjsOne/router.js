const express = require('express');
const router = express.Router();


router.get("/", (req, res, next) => {
  // res.send(`my name is jon`);
  res.json({
    "name": "jones",
    "age": "45",
    "numbers": 344554,
    "email": "jones@gmail.com"
  })
})

router.get("/login", (req, res, next) => { 
  res.send("welcome");
})

router.get("/logout", (req, res, next) => { 
  res.json({
    "success": true,
    "name": "logout"
  })
})

module.exports = router;