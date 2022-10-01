import React from "react";
import { NewAge } from "../../assets/images";
import OrderCard from "../../components/cards/OrderCard";
import { SummaryCard } from "../../components/cards/Summary";
import MainHeader from "../../components/header";
import BottomNav from "../../components/nav/BottomNav";
import { Footer } from "../../components/texts/Footer";
import BlueContainer from "../../containers/BlueContainer";
import { Section } from "../Dashboard/styled";
import { Body, Container, OrdersContainer, Summary } from "./styled";

const Orders = () => {
  return (
    <Container>
      <MainHeader />
      <Body>
        <SummaryCard
          text1="Already Returned"
          text2="Daily Income"
          price1={300}
          price2={20}
        />
        <Section>
          <ol>
            <li>Daily revenue arrives at 02:00pm each day.</li>
            <li>Earnings are always added directly to yout balance.</li>
            <li>
              The total income can be withdraw at any time when it exceeds 100.
            </li>
            <li>Your product will expire after it's Earning days.</li>
            <li>Allows earning of multiple products at the same time.</li>
          </ol>
        </Section>
        <OrdersContainer>
          <h2>Orders:</h2>
          <div>
            {[1, 2, 3, 4, 5].map((order, index) => (
              <OrderCard
                key={index}
                date="05-08-2021"
                time="11:58am"
                orderNo="202234234234"
                title="Sh-NEW AGE"
                image={NewAge}
                quantity={1}
                price="20"
                hourly="0.055"
                total="52.8"
                servingTime="40"
              />
            ))}
          </div>
        </OrdersContainer>
      </Body>
      <Footer small />
      <BottomNav />
    </Container>
  );
};

export default Orders;
