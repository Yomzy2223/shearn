import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import MainHeader from "../../components/header";
import BottomNav from "../../components/nav/BottomNav";
import { Footer } from "../../components/texts/Footer";
import { getIncomeFromDb } from "../../utils/dbCalls";
import { handleError } from "../../utils/globalFunctions";
import { BasicInfo, Body, Container, SubHeader } from "./styled";

const PaymentsRecords = () => {
  let activeStyle = { borderBottom: "4px solid #56FE8F" };
  const [totalIncome, setTotalIncome] = useState("--");

  let userInfo = useSelector((store) => store.userInfo.authInfo);

  const path = useLocation().pathname;
  const pathArray = [...path];
  let index = pathArray.lastIndexOf("/");
  let slicedPath = path.slice(index + 1, pathArray.length);

  useEffect(() => {
    handleIncome();
  }, []);

  const handleIncome = async () => {
    let incomeInfo = await getIncomeFromDb(userInfo.email);
    setTotalIncome(incomeInfo.total);
  };

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
            <p>Total Income</p>
            <span>
              {totalIncome !== "--" && "$"}
              {totalIncome}
            </span>
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
