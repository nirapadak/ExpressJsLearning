const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    "name": "whatever Products",
    "productsId": 19499
  })
})



module.exports = router;