'use strict';

/*
 * fetch({
 *   method: 'GET',
 *   url: 'https://developer.nps.gov/api/v1/parks?stateCode=il',
 *   'X-Api-Key': 'INSERT-API-KEY-HERE',
 * })
 *   .then((response) => {
 *     if (response.ok) {
 *       return response.json();
 *     } else {
 *       throw response.status;
 *     }
 *   })
 *   .then((data) => console.log(data))
 *   .catch((error) => console.log('Error: ', error));
 */
fetch("http://127.0.0.1:8000/api/informations", {
  "method": "GET",
  "headers": {
    "Authorization": "Bearer 2|HptX7Vugz9sB7DPyjlXYkwHWco11dv4T97frXyjr",
  },
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});