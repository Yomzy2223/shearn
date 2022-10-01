import React from "react";
import styled from "styled-components";
import { PaymentRecord } from "../../components/cards/PaymentRecordCard";

const AccountRecords = () => {
  return (
    <Container>
      {Array(10)
        .fill("_")
        .map((info, index) => (
          <PaymentRecord
            key={index}
            title="Daily Earning"
            amount={400}
            wallet="USDT"
            walletAddress="dfdkfueijlkdjoefo434534"
            date="05/09/2022"
            time="03:36pm"
            $success
          />
        ))}
    </Container>
  );
};

export default AccountRecords;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 14px;
`;
