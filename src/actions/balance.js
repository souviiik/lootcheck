import { DEPOSIT, SET_BALANCE, WITHDRAW } from "./constants";

export const setBalance = (balance) => {
  return {
    type: SET_BALANCE,
    balance,
  };
};

export const deposit = (deposit) => {
  return {
    type: DEPOSIT,
    deposit,
  };
};

export const withdraw = (withdraw) => {
  return {
    type: WITHDRAW,
    withdraw,
  };
};
