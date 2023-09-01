const { ethers } = require("hardhat");

async function main() {
  const contract = await ethers.deployContract("MetaCoin");
  console.log("MetaCoin deployed at: %s", await contract.getAddress());
  let deploymentTx = await contract.deploymentTransaction();
  console.log(`\tTx hash: ${deploymentTx.hash}`);

  await deploymentTx.wait();
  const receipt = await ethers.provider.getTransactionReceipt(
    deploymentTx.hash
  );
  console.log(`\tBlock hash: ${receipt.blockHash}`);
  console.log(`\tBlock number: ${receipt.blockNumber}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
