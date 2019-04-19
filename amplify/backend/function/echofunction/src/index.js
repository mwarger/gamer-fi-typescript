const axios = require("axios");

exports.handler = function(event, context) {
  /**
   {
    "type": "Query",
    "field": "echo",
    "arguments": {},
    "identity": null,
    "source": null
}
   */

  // console.log(`event = ${JSON.stringify(event)}`);
  // Make a request for a user with a given ID
  axios
    .get(
      `https://api-endpoint.igdb.com/games/?fields=name,popularity&order=popularity:desc`,
      {
        headers: { "user-key": "ae2544f440fc362f5391c8b21b5c9453" }
      }
    )
    .then(function(response) {
      // handle success
      context.done(null, response.data); // SUCCESS with message
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
      // always executed
    });
};
