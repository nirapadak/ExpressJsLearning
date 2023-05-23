const express = require('express');
const helmet = require('helmet');
const app = express();
const port = 5000;
const router = require("./router");
const productsRouter = require("./routerProducts");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());


app.use("/", router);
app.use('/products', productsRouter);



app.listen(port, (req, res) => {
  console.log(`server listening on port ${port}`);
})