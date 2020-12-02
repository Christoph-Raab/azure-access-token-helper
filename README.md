## Azure AD Access Token Helper

### Introduction

This commandline-like tool can be used to acquire an access_token from an AzureAD app registration. It will fetch the token from the app registration and print the token and the parsed content.

### Prerequisites

The helper tool requires ``npm`` to install dependencies and ``node`` to run. 
Run ``npm install -g npm`` in your preferred terminal to install both.

### Install

1) Clone the repository: ``git clone https://github.com/Christoph-Raab/azure-access-token-helper.git``
2) Navigate into the directory and install the dependencies: ``npm install``
3) Update ``CLIENT_ID``, ``CLIENT_SECRET`` and ``TENANT_ID`` inside the file ``index.js``
4) Optional: Adjust the scope

### Acquire Token

To acquire an access token run ``node index.js``.

### Example Response

The response will look something like

```js
token:
 eyJ0e...

decoded:
 { aud: '...',
  iss: 'https://sts.windows.net/<tenantId>/',
  iat: 1234567,
  nbf: 1234567,
  exp: 1234567,
  aio: '...',
  appid: '<clientId>',
  appidacr: '...',
  idp: 'https://sts.windows.net/<tenantId>/',
  oid: '...',
  rh: '...',
  sub: '...',
  tid: '<tenantId>',
  uti: '...',
  ver: '...' }
```
