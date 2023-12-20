import React from "react";
import { connectWallet } from "./config/config.js";
const ConnectWallet=(props) => {
  const handleClick= async () => {
    const walletResponse = await connectWallet();
    console.log(walletResponse);
    props.handlePublicKey(walletResponse);
  }
  return (
    <div className="App">
      <button
      onClick={handleClick}
      >Connect Wallet</button>
    </div>
  );
}

export default ConnectWallet;
