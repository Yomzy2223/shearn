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

const Fund = () => {
  const [amount, setAmount] = useState("");

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
            {[10, 15, 20, 30, 50, 100, 200].map((each, index) => (
              <AmountCard
                key={index}
                tabIndex={0}
                onClick={() => setAmount(each)}
              >
                ${each}
              </AmountCard>
            ))}
          </AmountCards>
          <Input>
            <span>$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Input>
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
