import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { AccountIcon, HomeIcon, OrderIcon } from "../../../assets/images";

const BottomNav = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <HomeIcon
        path="/dashboard"
        fill={pathname.includes("dashboard") ? "#56FE8F" : ""}
      />
      <OrderIcon
        path="/orders"
        fill={pathname.includes("order") ? "#56FE8F" : ""}
      />
      <AccountIcon
        path="/account"
        fill={pathname.includes("account") ? "#56FE8F" : ""}
      />
    </Container>
  );
};

export default BottomNav;

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 1000px;
  height: clamp(52px, 7vw, 60px);
  background-color: #022d57;
  border-radius: 15px 15px 0px 0px;
`;
