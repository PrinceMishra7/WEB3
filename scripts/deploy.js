
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const MyContract = await hre.ethers.getContractFactory("MyContract");
  const myContract = await MyContract.deploy();

  await myContract.deployed();

  console.log("Contract deployed to:", myContract.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
