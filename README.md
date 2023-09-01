# Sample Truffle project

Sample Truffle project to test deployment in [Besu's zero gas networks](https://github.com/hyperledger/besu/issues/5813).

## Configuration

Copy `sample.env` to `.env` and add a proper mnemonic.

Install dependencies.

```bash
npm i
```

## Reproducing the error

```bash
npm run compile
npm run deploy local
```

The last command returns the following error `"MetaCoin" -- Upfront cost exceeds account balance.`.

## Using hardhat (no error)

For comparison, if you use [hardhat](https://hardhat.org/), the deployment works as expected:

```bash
npm run compile-hardhat
npm run deploy-hardhat local
```
