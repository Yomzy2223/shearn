import React from "react";
import { UnionIcon } from "../../assets/images";
import { MainButton } from "../../components/botton";
import { SummaryCard } from "../../components/cards/Summary";
import MainHeader from "../../components/header";
import BottomNav from "../../components/nav/BottomNav";
import { Footer } from "../../components/texts/Footer";
import { Section } from "../Dashboard/styled";
import {
  Body,
  Container,
  WithdrawAmount,
  WithdrawInfo,
  WithdrawKeyInfo,
} from "./styled";

const Withdraw = () => {
  return (
    <Container>
      <MainHeader title="Withdraw" />
      <Body>
        <SummaryCard
          text1="Already Returned"
          text2="Daily Income"
          price1={300}
          price2={20}
        />
        <WithdrawAmount>
          <p>Type the amount you want to withdraw.</p>
          <input type="number" />
          <MainButton text="Withdraw Now" />
          <p>
            You need to update your wallet address for withdrawal. If this is
            the first time you are applying. Please go to "My Wallet Address"
            and enter the information of your wallet address accurately.{" "}
          </p>
        </WithdrawAmount>
        <WithdrawInfo>
          <img src={UnionIcon} alt="" />
          <WithdrawKeyInfo>
            <p>You can withdraw your balance.</p>
            <ol>
              <li>Minimum withdrawal: $5</li>
              <li>Withdrawal time: 24/7</li>
              <li>Arrival time: Same day.</li>
              <li>Charges: 7%</li>
            </ol>
            <p>
              Pass: The rebate balance can be transferred to available balance.
            </p>
          </WithdrawKeyInfo>
        </WithdrawInfo>
      </Body>
      <Footer small />
      <BottomNav />
    </Container>
  );
};

export default Withdraw;
