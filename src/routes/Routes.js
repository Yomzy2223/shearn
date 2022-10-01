import { Routes, Route, Outlet } from "react-router-dom";
import React from "react";
import { SignIn, SignUp } from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import SharesInfo from "../pages/SharesInfo";
import Orders from "../pages/Orders";
import Account from "../pages/Account";
import Withdraw from "../pages/Withdraw";
import WalletInfo from "../pages/WalletInfo";
import PaymentsRecords from "../pages/PaymentsRecord";
import FundRecords from "../pages/PaymentsRecord/FundRecords";
import WithdrawRecords from "../pages/PaymentsRecord/WithdrawRecords";
import AccountRecords from "../pages/PaymentsRecord/AccountRecords";
import Referrals from "../pages/Referrals";
import About from "../pages/About";
import Fund from "../pages/Fund";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        {/* <Route index element={<HomePage />} /> */}
        <Route index element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
        <Route path="login" element={<SignIn />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="shares" element={<Outlet />}>
          <Route path=":share" element={<SharesInfo />} />
        </Route>
        <Route path="orders" element={<Orders />} />
        <Route path="account" element={<Outlet />}>
          <Route index element={<Account />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="wallet-info" element={<WalletInfo />} />
          <Route path="payments-record" element={<PaymentsRecords />}>
            <Route index element={<FundRecords />} />
            <Route path="fund" element={<FundRecords />} />
            <Route path="withdraw" element={<WithdrawRecords />} />
            <Route path="account" element={<AccountRecords />} />
          </Route>
          <Route path="referrals" element={<Referrals />} />
          <Route path="about" element={<About />} />
          <Route path="fund" element={<Fund />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
