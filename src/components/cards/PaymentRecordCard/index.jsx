import React from "react";
import { Amount, Container, Details, Status, Title } from "./styled";

export const PaymentRecord = ({
  title,
  date,
  time,
  amount,
  wallet,
  paymentId,
  status,
  share,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Amount>${amount}</Amount>
      <Details>
        {title !== "Daily Earning" && (
          <>
            <p>Payment ID: {paymentId ? paymentId : "----"}</p>
            <p>Wallet name: {wallet}</p>
          </>
        )}
        {title === "Daily Earning" && <p>Share: {share}</p>}
        <p>
          Date (Time): <span>{date ? date : "----"}</span>{" "}
          <span>{time ? time : "--"}</span>{" "}
        </p>
      </Details>
      {title !== "Daily Earning" && (
        <Status
          $success={status?.toLowerCase() === "success"}
          $failed={status?.toLowerCase() === "failed"}
        >
          {status ? status : "----"}
        </Status>
      )}
    </Container>
  );
};
