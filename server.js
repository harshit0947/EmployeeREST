const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

app.set("view engine", "hbs");

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) =>{
    if(err){
      console.log('Unable to write log to the log file.');
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.get('/', (req, res) => {
  res.send("Hello Express!"); 
});

app.listen(3000, () =>{
  console.log('Server is running on port 3000');
});