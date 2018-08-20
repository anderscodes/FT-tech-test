const express = require('express');
const Api = require('./model/api.js');

const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/search', (req, res) => {
  const searchQuery = req.query.searchquery;
  const apiQuery = new Api(res, renderView, searchQuery);
  apiQuery.sendRequest();
});

let renderView = (res, data, searchQuery) => {
  res.render('pages/search', { result: data, searchQuery: searchQuery } );
};

app.listen(3000);

console.log('Running at Port 3000');
