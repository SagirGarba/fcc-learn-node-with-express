
var express = require('express');
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}))

// --> 7)  Mount the Logger middleware here

console.log("Hello World");
// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */


/** 2) A first working Express Server */


/** 3) Serve an HTML file */


/** 4) Serve static assets  */
app.post("/name", (req, res) => {
  let firstname = req.body.first;
  let lastname = req.body.last;
  
  let {firstname: first, lastname: last} = req.body;
  
  res.json({
    name: `${firstname} ${lastname}`
  })
})

/** 5) serve JSON on a specific route */
app.get("/:word/echo", (req, res) => {
  var { word } = req.params;
  res.json({echo: word})
})

/** 6) Use the .env file to configure the app */
 app.get("/now", (req, res, next) => {
   req.time = new Date().toString();
   next();
   },
   (req, res) => {
     res.json({
     time: req.time 
 })
   })
   
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " " 
              + "-" + " " + 
          req.ip);
  next()
})

/** 8) Chaining middleware. A Time server */
app.get("/json", (req, res) => {
  process.env.MESSAGE_STYLE === "uppercase" ? 
           res.json({
    message: "HELLO JSON"
  }): res.json({message: "Hello json"}) 
})

/** 9)  Get input from client - Route parameters 

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
app.use(express.static(__dirname + "/public"))
  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

/** 12) Get data form POST  */
app.get("/", (req, res) => {
  res.send("Hello Express")
})


// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
