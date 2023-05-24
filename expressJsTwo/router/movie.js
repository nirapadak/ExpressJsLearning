const express = require('express');
const router = express.Router();
const movies = require('../data/movies');

// console.log(movies)
const requireJson = (req, res, next) => {
  if (!req.is("application/json")) {
    res.json({
      "msg": "content-type not application/json"
    })
  } else {
    next();
  }
}


router.get('/movie',  (req, res, next) => {
  let page = req.query.page
  if (!page) {
    page = 1;
  }


  res.json({
    movies
  })
})



module.exports = router;

