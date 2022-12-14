import { Routes, Route, Outlet } from "react-router-dom";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { SignIn, SignUp } from "../pages/Auth";
import Protected from "./Protected";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { Toaster } from "react-hot-toast";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const SharesInfo = lazy(() => import("../pages/SharesInfo"));
const Orders = lazy(() => import("../pages/Orders"));
const Account = lazy(() => import("../pages/Account"));
const Withdraw = lazy(() => import("../pages/Withdraw"));
const WalletInfo = lazy(() => import("../pages/WalletInfo"));
const PaymentsRecords = lazy(() => import("../pages/PaymentsRecord"));
const WithdrawRecords = lazy(() =>
  import("../pages/PaymentsRecord/WithdrawRecords")
);
const AccountRecords = lazy(() =>
  import("../pages/PaymentsRecord/AccountRecords")
);
const FundRecords = lazy(() => import("../pages/PaymentsRecord/FundRecords"));
const Referrals = lazy(() => import("../pages/Referrals"));
const About = lazy(() => import("../pages/About"));
const Fund = lazy(() => import("../pages/Fund"));
const ForgotPassword = lazy(() =>
  import("../pages/Auth/SignIn/ForgotPassword")
);
const Reset = lazy(() => import("../pages/Auth/SignIn/Reset"));
const NewPassword = lazy(() => import("../pages/Auth/SignIn/NewPassword"));

const AppRoutes = () => {
  let userStoreInfo = useSelector((store) => store.userInfo.authInfo);

  const user = JSON.parse(localStorage.getItem("user"));

  const [userInfo, setUserInfo] = useState();
  // Triggers a state to have a page reload (updated user get passed thereafter, as a result of the reload)
  useEffect(() => {
    setUserInfo(userStoreInfo);
  }, [userStoreInfo]);

  let isVerified = user?.apiKey;

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            index
            element={
              <Protected isVerified={!isVerified} path="/dashboard">
                <SignIn />
              </Protected>
            }
          />
          <Route
            path="register"
            element={
              <Protected isVerified={!isVerified} path="/dashboard">
                <SignUp />
              </Protected>
            }
          />
          <Route
            path="login"
            element={
              <Protected isVerified={!isVerified} path="/dashboard">
                <SignIn />
              </Protected>
            }
          />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="new-password" element={<NewPassword />} />
          <Route path="reset" element={<Reset />} />
          <Route
            path="dashboard"
            element={
              <Protected isVerified={isVerified}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="shares"
            element={
              <Protected isVerified={isVerified}>
                <Outlet />
              </Protected>
            }
          >
            <Route path=":share" element={<SharesInfo />} />
          </Route>
          <Route
            path="orders"
            element={
              <Protected isVerified={isVerified}>
                <Orders />
              </Protected>
            }
          />
          <Route
            path="account"
            element={
              <Protected isVerified={isVerified}>
                <Outlet />
              </Protected>
            }
          >
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

      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          style: {
            margin: "10px",
            padding: "10px",
            display: "inline-flex",
            fontSize: "14px",
            zIndex: 999999,
          },
          duration: 4000,
          error: {
            style: {
              background: "#ff6363",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "red",
            },
          },
          success: {
            style: {
              background: "green",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "green",
            },
          },
        }}
      />
    </Suspense>
  );
};

export default AppRoutes;
