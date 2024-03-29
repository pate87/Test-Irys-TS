import React, { FC } from "react";
import Uploader from "../components/Uploader";
// import { ethers } from "ethers";
// import { WebIrys } from "@irys/sdk";
// import dotenv from "dotenv";
// import { useState, useEffect } from "react";
// dotenv.config();

const Page: FC = () => {

    // const [connectedAddress, setConnectedAddress] = useState<string>("");

    // const getWebIrys = async () => {
    //     if (typeof window.ethereum !== "undefined") {
    //       await window.ethereum.enable();
    //       const provider = new ethers.providers.Web3Provider(window.ethereum);
    //       console.log("provider=>", provider);
    //       const signer = provider.getSigner();
    //       setConnectedAddress(signer);
    //       console.log("Signer: ", signer);
    //       const blockNr = await provider.getBlockNumber();
    //       console.log("blockNr=>", blockNr);
    
    //       const url = "https://devnet.irys.xyz";
    //       console.log("url=>", url);
    //       const token = "arbitrum";
    //       console.log("token=>", token);
    //       // const providerUrl = process.env.PROVIDER_URL;
    //       const rpcURL =
    //         "https://arb-sepolia.g.alchemy.com/v2/r_MEEIQKRUVCV6c0cR9CDwySbentCPgh";
    //       console.log("providerUrl=>", rpcURL);
    
    //       // Create a wallet object
    //       const wallet = { rpcUrl: rpcURL, name: "ethersv5", provider: provider };
    //       console.log("wallet=>", wallet);
    
    //       console.log("connect to webIrys");
    //       // Use the wallet object
    //       const webIrys = new WebIrys({ url, token, wallet });
    //       console.log("webIrys=>", webIrys);
    
    //       console.log("connect to WebIrys.ready");
    //       await webIrys.ready();
    //       console.log("connected to WebIrys.ready");
    
    //       console.log(`Connected to webIrys from ${webIrys.address}`);
    //       return webIrys;
    //     }
    //   };
    return (
        // <main>
        //       <h1>Irys Test</h1>
        //       <p>

        // {connectedAddress && connectedAddress.length > 0 && (
        //       </p>
        //   <h3>Connected from: {connectedAddress}</h3>
        // )}
        // <div className="card">
        //   <button onClick={getWebIrys}>Connect To Irys Node</button>
        // </div>

        <div>
            <Uploader />
        </div>
        // </main>
        // <div>
        //     <Uploader showImageView={true} showReceiptView={true} />
        // </div>
    );
}

export default Page;
