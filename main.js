const axios = require('axios');

  
exports.handler = (event) => {

axios.post('https://works-uat.reproindialtd.com/api/reproGenus/pendingOrdersList', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log("res res res"+response);
   console.log("https://works-uat.reproindialtd.com/api/reproGenus/pendingOrdersList");
  return response;
})
.catch(function (error) {
  console.log("error error error error"+error);
  return error;
});
}
