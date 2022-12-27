import React, { useEffect, useState } from "react";
import { Puff } from "react-loading-icons";
import { useSelector } from "react-redux";
import { NewAge } from "../../assets/images";
import OrderCard from "../../components/cards/OrderCard";
import { SummaryCard } from "../../components/cards/Summary";
import MainHeader from "../../components/header";
import BottomNav from "../../components/nav/BottomNav";
import Empty from "../../components/texts/Empty";
import { Footer } from "../../components/texts/Footer";
import BlueContainer from "../../containers/BlueContainer";
import {
  getBoughtSharesInfo,
  getIncomeFromDb,
  updateIncome,
} from "../../utils/dbCalls";
import { formatAMPM, handleError } from "../../utils/globalFunctions";
import { Section } from "../Dashboard/styled";
import { Body, Container, Loading, OrdersContainer, Summary } from "./styled";

const Orders = () => {
  const [shares, setShares] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalIncome, setTotalIncome] = useState("--");
  const [dailyIncome, setDailyIncome] = useState("--");

  let userInfo = useSelector((store) => store.userInfo.authInfo);

  let count = 0;

  const handleShares = async () => {
    try {
      let shares = await getBoughtSharesInfo(userInfo.email);
      setShares(shares ? shares : []);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      if (count === 0) handleError(e);
      count++;
    }
  };

  const handleIncome = async () => {
    let incomeInfo = await getIncomeFromDb(userInfo.email);
    setTotalIncome(incomeInfo.total);
    setDailyIncome(incomeInfo.daily);
    console.log(incomeInfo);
  };

  const handleAll = async () => {
    await handleShares();
    await updateIncome(userInfo.email);
    handleIncome();
  };

  useEffect(() => {
    handleAll();
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
            {shares.length === 0 && !loading && (
              <Empty text="There are currently no bought shares" />
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
