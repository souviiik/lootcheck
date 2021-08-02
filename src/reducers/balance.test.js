import balanceReducer from "./balance";
import * as constants from "../actions/constants";
import balance from "./balance";

describe("balanceReducer", () => {
  it("sets a balance", () => {
    const balance = 10;

    expect(
      balanceReducer(undefined, {
        type: constants.SET_BALANCE,
        balance,
      })
    ).toEqual(balance);
  });

  it("deposits into balance", () => {
    const deposit = 10;
    const initialState = 5;

    expect(
      balanceReducer(initialState, {
        type: constants.DEPOSIT,
        deposit,
      })
    ).toEqual(initialState + deposit);
  });

  it("withdraws from balance", () => {
    const initialState = 20;
    const withdraw = 10;

    expect(
      balanceReducer(initialState, {
        type: constants.WITHDRAW,
        withdraw,
      })
    ).toEqual(initialState - withdraw);
  });
});
