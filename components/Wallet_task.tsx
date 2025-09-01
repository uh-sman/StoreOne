// "use client";
// import { ethers } from "ethers";
// import React, { useEffect, useState } from "react";

// declare global {
//   interface Window {
//     ethereum?: any;
//   }
// }

// const WalletConnector: React.FC = () => {
//   const [walletAddress, setWalletAddress] = useState<string>("");
//   const [network, setNetwork] = useState<string>("");

//   const checkMetaMask = (): boolean => {
//     if (!window.ethereum?.request) {
//       alert("MetaMask not found. Please install it.");
//       return false;
//     }
//     return true;
//   };

//   const connectWallet = async () => {
//     if (!checkMetaMask()) return;

//     try {
//       const accounts: string[] = await window.ethereum.request({
//         method: "eth_requestAccounts",
//       });
//       const account = accounts[0];
//       setWalletAddress(account);

//       // providers.Web3Provider(window.ethereum);
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const networkInfo = await provider.getNetwork();
//       setNetwork(networkInfo.name ?? `Chain ID: ${networkInfo.chainId}`);
//     } catch (error) {
//       console.error("Wallet connection failed:", error);
//     }
//   };

//   useEffect(() => {
//     if (!checkMetaMask()) return;

//     const handleAccountsChanged = (accounts: string[]) => {
//       setWalletAddress(accounts[0] || "");
//     };

//     const handleChainChanged = () => {
//       window.location.reload();
//     };

//     window.ethereum.on("accountsChanged", handleAccountsChanged);
//     window.ethereum.on("chainChanged", handleChainChanged);

//     return () => {
//       window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
//       window.ethereum.removeListener("chainChanged", handleChainChanged);
//     };
//   }, []);

//   return (
//     <div style={{ padding: "1rem", textAlign: "center" }}>
//       <button onClick={connectWallet}>
//         {walletAddress ? "Connected" : "Connect Wallet"}
//       </button>
//       {walletAddress && (
//         <>
//           <p>
//             <strong>Wallet:</strong> {walletAddress}
//           </p>
//           <p>
//             <strong>Network:</strong> {network}
//           </p>
//         </>
//       )}
//     </div>
//   );
// };

// export default WalletConnector;
