'use strict';

const express = require('express');
const app = express();
const movieApi = require('imdb-api');

app.use(express.static(__dirname + '/client'));

app.get('/movies', (req, res, next) => {
  movieApi.search(
    { title: req.query.keywords },
    require('./server/key.js')
  ).then(data => {
    console.log(data);
    res.status(200).json(data);
  });
});

app.listen(8080, () => {
  console.log("App is listening to port 8080");
});