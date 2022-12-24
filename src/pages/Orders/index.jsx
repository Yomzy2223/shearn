import React, { useEffect, useState } from "react";
import { Puff } from "react-loading-icons";
import { NewAge } from "../../assets/images";
import OrderCard from "../../components/cards/OrderCard";
import { SummaryCard } from "../../components/cards/Summary";
import MainHeader from "../../components/header";
import BottomNav from "../../components/nav/BottomNav";
import { Footer } from "../../components/texts/Footer";
import BlueContainer from "../../containers/BlueContainer";
import {
  getBoughtSharesInfo,
  getIncomeFromDb,
  updateIncome,
} from "../../utils/dbCalls";
import { formatAMPM } from "../../utils/globalFunctions";
import { Section } from "../Dashboard/styled";
import { Body, Container, Loading, OrdersContainer, Summary } from "./styled";

const Orders = () => {
  const [shares, setShares] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalIncome, setTotalIncome] = useState("--");
  const [dailyIncome, setDailyIncome] = useState("--");

  const handleShares = async () => {
    // setLoading(true);
    let shares = await getBoughtSharesInfo();
    // console.log(shares);
    setShares(shares ? shares : []);
    setLoading(false);
  };

  const handleIncome = async () => {
    let incomeInfo = await getIncomeFromDb();
    setTotalIncome(incomeInfo.total);
    setDailyIncome(incomeInfo.daily);
    console.log(incomeInfo);
  };

  useEffect(() => {
    updateIncome();
    handleIncome();
    handleShares();
    let interval = setInterval(() => {
      handleShares();
    }, 100000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let date = new Date();
  let min = 1000 * 60;
  let hr = min * 60;
  let day = hr * 24;
  console.log(formatAMPM(date));

  return (
    <Container>
      <MainHeader />
      <Body>
        <SummaryCard
          text1="Total Income"
          text2="Daily Income"
          price1={totalIncome}
          price2={dailyIncome}
        />
        <Section>
          <ol>
            <li>Daily dividend adds up to your total income every 24hrs.</li>
            <li>The total income can be withdrawn any time (minimum $5).</li>
            <li>
              Dividend stops adding up when the share's span time completes.
            </li>
            <li>You can have more than one shares at a time.</li>
          </ol>
        </Section>
        <OrdersContainer>
          <h2>Orders:</h2>
          <div>
            {loading && (
              <Loading>
                <Puff stroke="#56FE8F" fill="#56FE8F" width={60} height={60} />
              </Loading>
            )}
            {shares.map((order, index) => (
              <OrderCard key={index} orderNo="202234234234" order={order} />
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
