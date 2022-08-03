// Load the modules
var express = require('express'); //Express - a web application framework that provides useful utility functions like 'http'
var app = express();
var bodyParser = require('body-parser'); // Body-parser -- a library that provides functions for parsing incoming requests
app.use(bodyParser.json());              // Support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support encoded bodies


// Set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));// Set the relative path; makes accessing the resource directory easier

// Simple get api provided to check if the node.js starts up successfully. Opening up http://localhost:3000 should display the below returned json.
app.get("/", (req, res) => {
  res.json({ status: "success", message: "Welcome!" });
});

//============= Notes ===================

/*
app.get("/ops" , (request, response) => {
  response.send(ops);
});

// GET (BY ID)
app.get("/operations/:id" , (request, response) => {
  const opsId = request.params.id;
  const op = ops.find(op => op.id === parseInt(opsId));
  if(!op) return response.status(404).send("The task with the provided ID does not exist.");
  response.send(op);
});
//===========Notes ==================
app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.send(`The sum is: ${a + b}`);
});

app.post("/divide", (req, res) => {
  const { a, b } = req.body;
  res.send(`The result is: ${a / b}`);
});

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.send({
    result: parseInt(a) + parseInt(b)
  });
  //=======Notes===================
*/

app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  if("number" != typeof(num1) || "number" != typeof(num2)) return res.status(405).send("Not number");
  res.send({sum:num1 + num2});
});

app.post("/divide", (req, res) => {
  const { num1, num2 } = req.body;
  if("number" != typeof(num1) || "number" != typeof(num2)) return res.status(405).send("Not number");
  if(num2 == 0) return res.status(406).send("DO NOT DIVIDE BY ZERO NOOOO");
  res.send({q:num1 / num2});
});

//Add your code support two new API's /add and /divide here.




module.exports = app.listen(3000);
console.log('3000 is the magic port');
