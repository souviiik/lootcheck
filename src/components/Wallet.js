import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Wallet() {
  const [walletBalance, setWalletBalance] = useState(0);
  const balance = useSelector((state) => state.balance);

  const updateBalance = (e) => {
    setWalletBalance(+e.target.value);
  };

  return (
    <div>
      <h3 className="balance">Wallet Balance: {balance}</h3>
      <br />
      <input type="text" className="input-wallet" onChange={updateBalance} />
    </div>
  );
}
