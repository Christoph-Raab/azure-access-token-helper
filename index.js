const jwt_decode = require('jwt-decode');
const axios = require('axios');
const qs = require('qs');

const CLIENT_ID = '<clientId>';
const CLIENT_SECERET = '<clientSecret>';
const TENANT_ID = '<tenantId>';
const TOKEN_ENDPOINT ='https://login.microsoftonline.com/' + TENANT_ID + '/oauth2/v2.0/token';
const SCOPE = APP_ID + '/.default';

const postData = {
  client_id: CLIENT_ID,
  scope: SCOPE,
  client_secret: CLIENT_SECERET,
  grant_type: 'client_credentials'
};

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios
  .post(TOKEN_ENDPOINT, qs.stringify(postData))
  .then(response => {
	  var token = response.data.access_token;
	  console.log('token:\n', token, '\n\ndecoded:\n', jwt_decode(token));
  })
  .catch(error => {
    console.log(error);
});
