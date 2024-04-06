"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ethers } from "ethers";

// Assuming WalletConnect is imported from your utils/WalletConnect.ts file
import WalletConnect from "../utils/WalletConnect";

const WalletConnectionComponent = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<any>("");
  const [provider, setProvider] = useState<any>();

  const handleWalletConnect = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // await provider.send("eth_requestAccounts");
        console.log("provider=>", provider);
        // setConnectedAddress(provider);
        const signer = await provider.getSigner().getAddress();
        setWalletAddress(signer);

        setIsWalletConnected(true);
        console.log("Connected address:", walletAddress);
      }
      //   const connectedAddress = await WalletConnect(); // Assuming WalletConnect returns the connected address

      //   setProvider(WalletConnect());
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      // Handle error appropriately
    }
  };

  // Function to format the wallet address
  const formatWalletAddress = (address: string) => {
    const visibleChars = 4; // Number of characters to show at the beginning and end
    const hiddenChars = address.length - 2 * visibleChars;
    return `${address.substring(0, visibleChars)}...${address.substring(
      address.length - visibleChars
    )}`;
  };

  return (
    <div className="flex flex-row items-start justify-start py-0 pr-[25px] pl-[24.9px]">
      <b className="relative inline-block min-w-[125px] z-[1]">
        {!isWalletConnected ? (
          <>
            {/* loading state */}
            {/* <Loader2 className="h-10 w-10 text-blue-500 animate-spin" /> */}
            <p className="mt-2 text-sm text-slate-400">
              {/* Spilling Tea to GPT... */}
              <Button onClick={handleWalletConnect}>Connect Wallet</Button>
            </p>
          </>
        ) : (
          <>
            Welcome {formatWalletAddress(walletAddress)}
            {/* <Inbox className="w-10 h-10 text-blue-500 pt-2" /> */}
            {/* <p className="mt-2 text-sm text-slate-400">Drop PDF Here</p> */}
          </>
        )}

        {/* <WalletConnectionComponent /> */}
      </b>
    </div>

    // <div className="flex flex-row items-start justify-start py-0 pr-[25px] pl-[24.9px]">
    //   <b className="relative inline-block min-w-[125px] z-[1]">
    //     {!isWalletConnected ? (
    //       <>
    //         {/* loading state */}
    //         {/* <Loader2 className="h-10 w-10 text-blue-500 animate-spin" /> */}
    //         <p className="mt-2 text-sm text-slate-400">
    //           {/* Spilling Tea to GPT... */}
    //           <Button onClick={handleWalletConnect}>Connect Wallet</Button>
    //         </p>
    //       </>
    //     ) : (
    //       <>
    //         Welcome {formatWalletAddress(walletAddress)}
    //         {/* <Inbox className="w-10 h-10 text-blue-500 pt-2" /> */}
    //         {/* <p className="mt-2 text-sm text-slate-400">Drop PDF Here</p> */}
    //       </>
    //     )}
    //   </b>
    // </div>
  );
};

export default WalletConnectionComponent;
