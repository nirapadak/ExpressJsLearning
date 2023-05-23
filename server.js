const express = require('express');
const helmet = require('helmet');
const app = express();
var port = 8000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

// routes meddlers

function validations (req, res, next){
  res.locals.validated = true
  console.log("1", "validations Run");
  next();
}


// app.use('/', validations);
app.use('/login', validations)

// app.all('*', (req, res) => {
//   res.send(`<h1>my name is json pal</h1>`);
// })

app.get("/", (req, res) => {
  // console.log('2', res.locals.validated);
  res.cookie("country", "bangladesh");
  res.redirect("/login");
})
app.get("/login", (req, res) => {
  res.status(201)
  // res.send(`<h1>this is post request</h1>`);
  // console.log('3', res.locals.validated);
  res.json({
    "name": "jones",
    "numbers": 45,
    "age": 56,
    "status": "higher"
  })
})
app.delete("/logOut", (req, res)=> {
  res.send(`this is delete request`);
})


app.listen(port, (err, res) => {
  console.log(`server listening on ${port}`);
})