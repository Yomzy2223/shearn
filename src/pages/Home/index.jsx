import React from "react";
import styled from "styled-components";
import { DollarIcon, NewAge } from "../../assets/images";
import { MainButton } from "../../components/botton";
import AccountMainCard from "../../components/cards/AccountMain";
import OrderCard from "../../components/cards/OrderCard";
import { PaymentRecord } from "../../components/cards/PaymentRecordCard";
import { ImagesCarousel } from "../../components/carousel";
import { PhoneNumberInput, PlainInput } from "../../components/Input";
import { LinkTextsWithDivider, TextsWithLink } from "../../components/texts";

const HomePage = () => {
  return (
    <Container>
      <PaymentRecord
        title="Fund"
        amount={400}
        wallet="USDT"
        walletAddress="dfdkfueijlkdjoefo434534"
        date="05/09/2022"
        time="03:36pm"
        $success
      />
      <PaymentRecord
        title="Account"
        amount={400}
        wallet="USDT"
        walletAddress="dfdkfueijlkdjoefo434534"
        date="05/09/2022"
        time="03:36pm"
        $success
      />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 100%;
  gap: 20px;
`;
