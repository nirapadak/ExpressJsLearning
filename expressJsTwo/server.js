const express = require('express');
const helmet = require('helmet');
require('dotenv').config();
const app = express();
// const port = 8080;
const productRouter = require("./router/productRouter.js")
const getRouter = require("./router/getJson.js");
const userProfile = require("./router/userProfile.js");
const indexRouter = require('./router/index.js')
const moviesRouter = require('./router/movie')

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
let port = process.env.PORT || 3000;


//applications med ----------------

app.use((req, res, next) => {
  if (req.query.ApiKey != "12345") {
    res.status(401);
    res.json({
      "msg": "invalid API key provided"
    })
  } else {
    next();
  }
})


app.use("/user", userProfile);
app.use("/", getRouter)
app.use("/product", productRouter);
app.use('/index', indexRouter);
app.use("/movies", moviesRouter);



app.listen(port, (req, res) => {
  console.log(`sever is running on ${port}`);
})