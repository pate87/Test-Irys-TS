import { ethers } from "ethers";
import { useState } from "react";

const WalletConnect = async () => {
  // const [connectedAddress, setConnectedAddress] = useState<any>();
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log("provider=>", provider);
    // setConnectedAddress(provider);
    const signer = provider.getSigner();
    // console.log("Signer: ", signer);
    // const blockNr = await provider.getBlockNumber();
    // console.log("blockNr=>", blockNr);
    return signer;
  }
  // return connectedAddress;
};

export default WalletConnect;
