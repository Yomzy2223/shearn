import React from "react";
import styled from "styled-components";
import { PaymentRecord } from "../../components/cards/PaymentRecordCard";

const FundRecords = () => {
  return (
    <Container>
      {Array(10)
        .fill("_")
        .map((info, index) => (
          <PaymentRecord
            key={index}
            title="Fund"
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

export default FundRecords;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 14px;
`;
