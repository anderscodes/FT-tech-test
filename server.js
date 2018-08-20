const express = require('express');
const Api = require('./model/api.js');

const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/search', (req, res) => {
let searchQuery = req.query.searchquery;
let apiQuery = new Api(searchQuery);
apiQuery.sendRequest();
});


app.listen(3000);

console.log('Running at Port 3000');
