# Metaswap v3

## Prerequisites

1. [Git](https://git-scm.com)
2. [Node.js](https://nodejs.org/en) v16.20.2
3. [Yarn](https://classic.yarnpkg.com/lang/en) v1.22.22

## Setting Up

1. Clone the repository

```bash
git clone https://github.com/fullstack-development/uniswap-v3-interface.git
```

2. Install dependencies

```bash
yarn
```

### Note:
The project uses yarn `4.2.2`, with node `20.0`, for which the following commands can be followed in case of errors:
- `corepack enable`
- `corepack prepare yarn@4.2.2 --activate`
- `yarn -v` should return `4.2.2`

## Development

1. Start the server

```bash
yarn start
```

### To resolve `code: 'ERR_OSSL_EVP_UNSUPPORTED'`
Either add or export the following variable in the terminal:
```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

## Production

1. Build the app

```bash
yarn build
```
