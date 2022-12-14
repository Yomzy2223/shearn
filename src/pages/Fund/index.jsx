import React, { useState } from "react";
import { USDT } from "../../assets/images";
import { MainButton } from "../../components/botton";
import MainHeader from "../../components/header";
import {
  AmountCard,
  AmountCards,
  Body,
  Container,
  Input,
  Main,
  Middle,
} from "./styled";
import CoinbaseCommerceButton from "react-coinbase-commerce";
import "react-coinbase-commerce/dist/coinbase-commerce-button.css";
import { fundList } from "../../utils/config";
import { fundAccount, updateFundNotification } from "../../utils/dbCalls";
import { useSelector } from "react-redux";

const Fund = () => {
  let userInfo = useSelector((store) => store.userInfo.authInfo);

  const handleLoad = () => {
    console.log("Loaded");
  };

  const handleChargeSuccess = (data, amount) => {
    console.log(data);
    fundAccount({ ...data, amount: amount }, userInfo.email);
    updateFundNotification({ ...data, amount: amount }, userInfo.email);
  };
  const handleChargeFailure = (data, amount) => {
    console.log(data);
    fundAccount({ ...data, amount }, userInfo.email);
    updateFundNotification({ ...data, amount: amount }, userInfo.email);
  };
  const handlePaymentDetected = (data, amount) => {
    console.log(data);
    console.log("Payment is detected");
  };
  const handleModalClose = () => {
    console.log("Modal is closed");
  };

  return (
    <Container>
      <MainHeader title="Fund" />
      <Body>
        <Main>
          <p>
            {" "}
            <span>Fund amount</span> (minimum deposit $10)
          </p>
          <AmountCards>
            {fundList.map((each, index) => (
              <CoinbaseCommerceButton
                key={index}
                checkoutId={each.checkoutID}
                onLoad={handleLoad}
                onChargeSuccess={(data) =>
                  handleChargeSuccess(data, each.amount)
                }
                onChargeFailure={(data) =>
                  handleChargeFailure(data, each.amount)
                }
                onPaymentDetected={(data) =>
                  handlePaymentDetected(data, each.amount)
                }
                onModalClosed={handleModalClose}
                className="paymentButton"
              >
                ${each.amount}
              </CoinbaseCommerceButton>
              // <AmountCard
              //   key={index}
              //   tabIndex={0}
              //   onClick={() => setAmount(each)}
              // >
              //   ${each}
              // </AmountCard>
            ))}
          </AmountCards>
          {/* <Input>
            <span>$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Input> */}
        </Main>
        <Middle>
          <span>Fund channel</span>
          <img src={USDT} alt="USDT" />
        </Middle>
        <MainButton text="Fund Now" />
      </Body>
    </Container>
  );
};

export default Fund;
