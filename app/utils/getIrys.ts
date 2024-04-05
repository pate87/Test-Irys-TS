import { ethers } from "ethers";
import { WebIrys } from "@irys/sdk";
import WalletConnect from "./WalletConnect";
import dotenv from "dotenv";
dotenv.config();

// export const getIrys: React.FC<UploaderConfigProps> = ({
// showImageView = true,
// showReceiptView = true,
// encryptData = false,
// }) => {
// const [files, setFiles] = useState<FileWrapper[]>([]);
// const [message, setMessage] = useState<string>("");

// useEffect(() => {
// 	setMessage("");
// }, []);

// const [connectedAddress, setConnectedAddress] = useState<string>();
const getWebIrys = async () => {
  const provider = await WalletConnect();
  console.log("provider", provider);
  // if (typeof window.ethereum !== "undefined") {
  //   await window.ethereum.enable();
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   console.log("provider=>", provider);

  const url = "https://devnet.irys.xyz";
  console.log("url=>", url);
  const token = "arbitrum";
  console.log("token=>", token);
  //   const rpcURL = new providers.Web3Provider((window as WindowWithEthereum).ethereum);
  const rpcURL = process.env.NEXT_PUBLIC_RPC_ARBITRUM;
  console.log("providerUrl=>", rpcURL);

  // Create a wallet object
  const wallet = { rpcUrl: rpcURL, name: "ethersv5", provider: provider };
  console.log("wallet=>", wallet);

  console.log("connect to webIrys");
  // Use the wallet object
  const webIrys = new WebIrys({ url, token, wallet });
  console.log("webIrys=>", webIrys);

  console.log("connect to WebIrys.ready");
  await webIrys.ready();
  console.log("connected to WebIrys.ready");

  console.log(`Connected to webIrys from ${webIrys.address}`);
  return webIrys;
  // }
};
// }

export default getWebIrys;
