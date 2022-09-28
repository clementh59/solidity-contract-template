# solidity contract template

This repository contains a smart contract which implements an incremental merkle tree based on poseidon hash.

## Usage

### Installation

```shell
npm i
```

### Compile contracts

```shell
npm run compile
```

### Test

Run all tests:

```shell
npm run test
```

Run unit tests:

```shell
npm run test:unit
```

Run integration tests:

```shell
npm run test:integration
```

### Deploy

Create a `.env` file with your infura API KEY as well as the private key of an account that has some ETH on
[rinkeby](https://rinkeby.etherscan.io/).

```shell
INFURA_API_KEY='...'
PRIVATE_KEY='...'
```

Then, run the deployment script:

```shell
npm run deploy
```

The contracts addresses will be printed in the console. Then, you can interact with the deployed contract using the script
`scripts/interactWithDeployedContract.js`. You'll need to replace `CONTRACT_ADDRESS` with the address of your freshly
deployed merkle tree contract.

## Areas of improvement

The solidity function `isKnownRoot` can do up to 2^32 iterations while looking for the root, which isn't great.
