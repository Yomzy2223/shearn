import React from "react";
import { Amount, Container, Details, Status, Title } from "./styled";

export const PaymentRecord = ({
  title,
  date,
  time,
  amount,
  wallet,
  walletAddress,
  $success,
  $failed,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount>${amount}</Amount>
      <Details>
        {title !== "Daily Earning" && (
          <>
            <p>Wallet name: {wallet}</p>
            <p>Wallet Address: {walletAddress}</p>
          </>
        )}
        <p>
          Time: <span>{date}</span> <span>{time}</span>{" "}
        </p>
      </Details>
      {title !== "Daily Earning" && (
        <Status $success={$success} $failed={$failed}>
          {$success && "Success"}
          {$failed && "Failed"}
        </Status>
      )}
    </Container>
  );
};
