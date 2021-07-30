import React from "react";
import { useSelector } from "react-redux";

export default function Wallet() {
  const balance = useSelector((state) => state.balance);

  return (
    <div>
      <h3 className="balance">Wallet Balance: {balance}</h3>
    </div>
  );
}
