require('dotenv').config();
const PARAM = process.env.CONTRACT_PARAM;

async function main() {
  /* FROM ABI:
  Hasher = await ethers.getContractFactory(hasherContract.abi, hasherContract.bytecode);
  hasher = await Hasher.deploy();

  console.log(`Hasher address: ${hasher.address}`);
  */

  const MyContract = await ethers.getContractFactory('MyContract');
  const myContract = await MyContract.deploy(PARAM);

  console.log(`Contract address: ${myContract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
