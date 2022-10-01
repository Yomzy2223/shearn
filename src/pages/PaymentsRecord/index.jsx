import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { PaymentRecord } from "../../components/cards/PaymentRecordCard";
import MainHeader from "../../components/header";
import BottomNav from "../../components/nav/BottomNav";
import { Footer } from "../../components/texts/Footer";
import { BasicInfo, Body, Container, SubHeader } from "./styled";

const PaymentsRecords = () => {
  let activeStyle = { borderBottom: "4px solid #56FE8F" };

  const path = useLocation().pathname;
  const pathArray = [...path];
  let index = pathArray.lastIndexOf("/");
  let slicedPath = path.slice(index + 1, pathArray.length);

  return (
    <Container>
      <MainHeader title="Payments" />
      <Body>
        {slicedPath === "fund" && (
          <BasicInfo>
            <p>
              If no order is generated after your successful payment, please
              upload the transaction voucher.
            </p>{" "}
          </BasicInfo>
        )}
        {slicedPath === "account" && (
          <BasicInfo>
            <p>My Balance</p>
            <span>$500.00</span>
          </BasicInfo>
        )}
        {slicedPath === "withdraw" && (
          <BasicInfo>
            <p>
              If withdrawal is placed to a wrong address, contact support
              immediately{" "}
            </p>
          </BasicInfo>
        )}
        <SubHeader>
          <NavLink
            to="/account/payments-record/fund"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            {" "}
            Fund
          </NavLink>
          <NavLink
            to="/account/payments-record/withdraw"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            {" "}
            Withdraw
          </NavLink>
          <NavLink
            to="/account/payments-record/account"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            {" "}
            Account
          </NavLink>
        </SubHeader>
        <Outlet />
      </Body>
      <Footer small />
      <BottomNav />
    </Container>
  );
};

export default PaymentsRecords;
