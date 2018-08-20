const request = require('request');
require('dotenv').config();


class Api {
  constructor(response, renderView, searchQuery) {
    this.response = response;
    this.renderView = renderView;
    this.searchQuery = searchQuery;
    this.headers = {
      'Postman-Token': '69827870-4ed1-4282-857e-16cfeff158b1',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      'X-Api-Key': process.env.API_KEY,
    };
    this.url = 'http://api.ft.com/content/search/v1';
  }

  _resultLoop(result) {
    const resultsArray = [];
    for (let i = 0; i < result.length; i++) {
      const array = [
        result[i].title.title,
        result[i].location.uri,
      ];
      resultsArray.push(array);
    }
    return resultsArray;
  }

  _options() {
    return {
      method: 'POST',
      uri: this.url,
      headers: this.headers,
      body:
     {
       queryString: this.searchQuery,
       resultContext: { aspects: ['title', 'lifecycle', 'location', 'summary', 'editorial'] },
     },
      json: true,
    };
  }

  sendRequest() {
    request(this._options(), (error, response, body) => {
      if (error) throw new Error(error);
      const result = body.results[0].results;
      const loop = this._resultLoop(result);
      this.renderView(this.response, loop, this.searchQuery);
    });
  }
}

module.exports = Api;
