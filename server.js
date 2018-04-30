'use strict';

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/client'));


app.listen(8080, () => {
  console.log("App is listening to port 8080");
});