import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@containers/Layout";

import Orders from "@components/Order.jsx";

import Home from "@pages/Home";
import Login from "@pages/Login";
import RecoveryPassword from "@pages/RecoveryPassword";
import SendEmail from "@pages/SendEmail.jsx";
import NewPassword from "@pages/NewPassword.jsx";
import MyAccount from "@pages/MyAccount.jsx";
import CreateAccount from "@pages/CreateAccount.jsx";
import Checkout from "@pages/Checkout.jsx";
import NotFound from "@pages/NotFound";

import AppContext from "@context/AppContext.js";
import useInitialState from "@hooks/useInitialState";

import "@styles/global.css";

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter basename="/react-store">
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/recovery-password"
              element={<RecoveryPassword />}
            />
            <Route exact path="/send-email" element={<SendEmail />} />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route exact path="/account" element={<MyAccount />} />
            <Route exact path="/signup" element={<CreateAccount />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
