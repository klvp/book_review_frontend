import React from "react";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../store/store";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <Header />
      <main className="container mx-auto p-4">{children}</main>
    </Provider>
  );
};

export default Layout;
