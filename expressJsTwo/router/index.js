const express = require('express');
const router = express.Router();
const appData = require('../data/movies');
// console.log(appData)



router.get('/', (req, res, next) => {
  res.json({
    "name": "index routers"
  })
})


router.get('/movies', (req, res, next) => {
  let page = req.query.page;
  if (page == undefined) {
    page =1
  }
  
  let result = appData.filter(movie => {
    return movie.most_popular==false;
  })

  let indexToNumber = (page - 1) * 20;
  result = result.slice(indexToNumber, indexToNumber + 19);

  res.json({
    page,
    result
  })
})

module.exports = router;