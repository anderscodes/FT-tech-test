const request = require('request');
require('dotenv').config()


class Api{
  constructor(searchQuery){
    this.searchQuery = searchQuery
    this.headers = {
      'Postman-Token': '69827870-4ed1-4282-857e-16cfeff158b1',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      'X-Api-Key': process.env.API_KEY,
    }
    this.url = "http://api.ft.com/content/search/v1"
  }

  _options(){
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
    request( this._options(), (error, response, body) => {
       if (error) throw new Error(error);
       console.log(body)
     });
   }
  }

module.exports = Api
