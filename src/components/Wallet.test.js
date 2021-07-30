import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Wallet from "./Wallet";

describe("<Wallet />", () => {
  const initialState = {
    balance: 20,
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);
  const wallet = shallow(
    <Provider store={store}>
      <Wallet />
    </Provider>
  );

  console.log(wallet.debug());

  it("renders properly", () => {
    expect(wallet).toMatchSnapshot();
  });

  it("displays the balance", () => {
    expect(wallet.dive().find(".balance").text()).toEqual("About");
  });
});
