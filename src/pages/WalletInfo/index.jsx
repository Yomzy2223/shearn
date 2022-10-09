import React from "react";
import { MainButton } from "../../components/botton";
import MainHeader from "../../components/header";
import { PlainInput } from "../../components/Input";
import BottomNav from "../../components/nav/BottomNav";
import { Footer } from "../../components/texts/Footer";
import { Body, Bottom, BottomInfo, Container, InputWrapper } from "./styled";

const WalletInfo = () => {
  return (
    <Container>
      <MainHeader title="My Wallet Info" />
      <Body>
        <p>
          Please enter your wallet address details below to withdraw your
          income.
        </p>
        <InputWrapper>
          <p>* Wallet Address (Trc20)</p>
          <PlainInput
            type="text"
            placeholder="Enter your wallet address (USDT Trc20)"
          />
        </InputWrapper>
        <Bottom>
          <MainButton text="Submit" />
          <BottomInfo>
            Please type the information of your wallet address correctly. We
            will not be responsible for capital loss caused by information
            error.
          </BottomInfo>
        </Bottom>
      </Body>
      <Footer small />
      <BottomNav />
    </Container>
  );
};

export default WalletInfo;
