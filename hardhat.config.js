// https://hardhat.org/hardhat-runner/docs/config

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  networks: {
    // in built test network to use when developing contracts
    hardhat: {
      chainId: 1337,
    },
    local: {
      url: "http://127.0.0.1:8545",
      accounts: {
        mnemonic: process.env.DEPLOYER_MNEMONIC,
      },
    },
  },
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};
