import React from "react";
import { UnionIcon } from "../../assets/images";
import { MainButton } from "../../components/botton";
import { SummaryCard } from "../../components/cards/Summary";
import MainHeader from "../../components/header";
import BottomNav from "../../components/nav/BottomNav";
import { TextsWithLink } from "../../components/texts";
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
          text1="Total Income"
          text2="Daily Income"
          price1={300}
          price2={20}
        />
        <WithdrawAmount>
          <p>Enter amount</p>
          <input type="number" />
          <MainButton text="Withdraw Now" />
          <TextsWithLink
            text={[
              {
                text: "If you are placing withdrawal for the first time, kindly go to",
                link: { to: "/account/wallet-info", text: "My Wallet Address" },
              },
              {
                text: "and fill in your address information (USDT Trc20).",
                link: { to: "", text: "" },
              },
            ]}
          />
        </WithdrawAmount>
        <WithdrawInfo>
          <img src={UnionIcon} alt="" />
          <WithdrawKeyInfo>
            <p>You can withdraw your total income.</p>
            <ol>
              <li>Minimum withdrawal: $3</li>
              <li>Withdrawal time: 24/7</li>
              <li>Arrival time: Same day.</li>
              <li>Charges: 7%</li>
            </ol>
          </WithdrawKeyInfo>
        </WithdrawInfo>
      </Body>
      <Footer small />
      <BottomNav />
    </Container>
  );
};

export default Withdraw;
