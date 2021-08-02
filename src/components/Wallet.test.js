import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Wallet from "./Wallet";

describe("<Wallet />", () => {
  const mockDeposit = jest.fn();
  const initialState = {
    balance: 20,
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);
  const wallet = mount(
    <Provider store={store}>
      <Wallet />
    </Provider>
  );

  it("renders properly", () => {
    expect(wallet).toMatchSnapshot();
  });

  it("displays balance", () => {
    expect(wallet.find(".balance").text()).toEqual("Wallet Balance: 20");
  });

  it("creates an input to deposit to/ withdraw from the wallet", () => {
    expect(wallet.find(".input-wallet").exists()).toBe(true);
  });

  describe("when user types into the wallet input", () => {
    const userBalance = "25";

    beforeEach(() => {
      wallet
        .find(".input-wallet")
        .simulate("change", { target: { value: userBalance } });
    });

    it("update the local wallet balance in`state` and converts that to a number", () => {
      console.log(`wallet`, wallet.state());
      expect(wallet.state.walletBalance).toEqual(+userBalance);
    });
  });
});
