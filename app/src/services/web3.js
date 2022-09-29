import { ethers } from "ethers";
const provider = new ethers.providers.Web3Provider(window.ethereum);

const contractAddress = "0x1785D94574E5E03b767b52B885507fA9CbC25189";

const contractABI = [
  // Some details about the token
  "function name() view returns (string)",
  "function symbol() view returns (string)",

  // Get the account balance
  "function balanceOf(address) view returns (uint)",

  // Send some of your tokens to someone else
  "function transfer(address to, uint amount)",

  // mint new tokens
  "function mint(address to, uint amount)",

  // An event triggered whenever anyone transfers to someone else
  "event Transfer(address indexed from, address indexed to, uint amount)"
];

// The Contract object
const _contract = new ethers.Contract(contractAddress, contractABI, provider);

export const sendTransaction = async (address, amount) => {
    //const name = await _contract.name();
    //const symbol = await _contract.symbol();
    
    await getContractWithSigner().mint(address, amount);
}

export const onEVMEventHook = (address, onEnd) => {
    // A filter for when a specific address receives tokens
    const filter = _contract.filters.Transfer(null, address);
    // Receive an event when that filter occurs
    getContractWithSigner().on(filter, (from, to, amount, event) => {
        console.log(event);
        onEnd(amount);
    });
}

const getContractWithSigner = () => {
    const signer = provider.getSigner();
    return _contract.connect(signer);
}