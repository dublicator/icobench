# IcoBench

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdublicator%2Ficobench.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdublicator%2Ficobench?ref=badge_shield)

IcoBench allows you to get various information and data from the platform including ICO listings, ratings, and stats.

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Resources](#resources)
- [How can I get the access](#api-access)
- [Authors](#authors)
- [Terms & Conditions](#terms)
- [License](#license)

## Getting Started

To use the ICObench Data API you need to have both "Private Key" and "Public Key".

- Public Key is used to identify the API user and is sent via request header as "X-ICObench-Key".
- Private Key is used to sign every request together with JSON. Both are hashed by HMAC SHA384, converted to base64 and sent via request header as "X-ICObench-Sig".

Please make sure to send data using POST method and from the IP that you have whitelisted in your API settings.

## Installation

IcoBench makes use of the latest set of `@types` TypeScript definitions files, allowing you to install everything using just a
simple `npm install`.

```bash
npm install icobench --save
```

Or if you prefer yarn:

```bash
yarn add icobench
```

## How can I get the access

You can request an access to API by following next steps:

- Register a new account [here](https://icobench.com/register)
- Request the API key [here](https://icobench.com/developers)

## Resources

- [ICObench API PHP Class](https://github.com/ICObench/data-api/blob/master/ICObenchAPI.php)
- [ICObench API JS Example](https://github.com/ICObench/data-api/blob/master/ICObenchAPI.js)
- [API documentation](https://icobench.com/developers)

## Authors

View list of [contributors](https://github.com/dublicator/icobench/graphs/contributors) who participated in this project.

## Terms & Conditions

See the [Terms & Conditions](TERMS.md) file for details

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdublicator%2Ficobench.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdublicator%2Ficobench?ref=badge_large)