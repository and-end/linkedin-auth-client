<h1 align='center'>
  <br>
  <a href='https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin/consumer/context'>
    <img src='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg' alt='LinkedIn Logo' width='75' />
  </a>
  <p>LinkedIn auth client</p>
</h1>

<h4 align='center'>A simple client for authentication using LinkedIn.</h4>

<p align='center'>
    <a href='https://www.npmjs.com/package/@and-end/linkedin-auth-client/v/latest'>
        <img alt='npm latest version' src='https://img.shields.io/npm/v/@and-end/linkedin-auth-client/latest' />
    </a>
    <a href='https://www.npmjs.com/package/@and-end/linkedin-auth-client/v/latest'>
        <img alt='npm weekly downloads' src='https://img.shields.io/npm/dw/@and-end/linkedin-auth-client' />
    </a>
    <a href='https://codeclimate.com/github/and-end/linkedin-auth-client/maintainability'>
        <img alt='Maintainability' src='https://api.codeclimate.com/v1/badges/9480af563b20557dc776/maintainability' />
    </a>
    <a href='https://github.com/prettier/prettier'>
        <img alt='code style: prettier' src='https://img.shields.io/badge/code_style-prettier-ff69b4.svg' />
    </a>
    <a href='https://creativecommons.org/licenses/by-nc/4.0/'>
        <img alt='License: CC BY-NC 4.0' src='https://img.shields.io/npm/l/@and-end/linkedin-auth-client' />
    </a>
</p>

<p align='center'>
  <a href='#installation'>Installation</a>&nbsp;&nbsp;●&nbsp;
  <a href='#usage'>Usage</a>&nbsp;&nbsp;●&nbsp;
  <a href='#contributing'>Contributing</a>&nbsp;&nbsp;●&nbsp;
  <a href='#versioning'>Versioning</a>&nbsp;&nbsp;●&nbsp;
  <a href='#authors'>Authors</a>&nbsp;&nbsp;●&nbsp;
  <a href='#license'>License</a>
</p>

## Installation

```bash
$ npm install @and-end/linkedin-auth-client
```

## Usage

```typescript
import fetch from 'node-fetch';
import LinkedInAuthClient from '@and-end/linkedin-auth-client';

const config = { fetchProvider: fetch };
const params = {
  client_id: 'xxxxxxxxxxxxxx',
  client_secret: 'xxxxxxxxxxxxxxxx',
  redirect_uri: 'https://example.com/auth/linkedin',
  scope: ['r_liteprofile', 'r_emailaddress'],
  response_type: 'code',
  grant_type: 'authorization_code'
};

const linkedInAuthClient = new LinkedInAuthClient(config);

linkedInAuthClient.init(params);

const authorizationCode = 'xxxxxxxxxxxxxxxxxxxx';
const data = await linkedInAuthClient.getAccessToken(authorizationCode);

console.log(data); // => { access_token: 'xxxxxxx', expires_in: '5184000' }
```

See how to request an authorization code in [`test/devServer.ts`](test/devServer.ts)

Api reference: https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin/consumer/context#step-2-request-an-authorization-code

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/and-end/linkedin-auth-client/tags).

## Authors

- **Kacper Ochmański** - _Initial work, development_ - [ochmanski](https://github.com/ochmanski)

See also the list of [contributors](https://github.com/and-end/linkedin-auth-client/contributors) who participated in this project.

## License

This project is licensed under the [CC BY-NC 4.0 License](https://creativecommons.org/licenses/by-nc/4.0/deed.en) - see the [LICENSE](LICENSE) file for details
