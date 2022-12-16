import React, { useEffect, useState } from "react";
import { Puff } from "react-loading-icons";
import { NewAge } from "../../assets/images";
import OrderCard from "../../components/cards/OrderCard";
import { SummaryCard } from "../../components/cards/Summary";
import MainHeader from "../../components/header";
import BottomNav from "../../components/nav/BottomNav";
import { Footer } from "../../components/texts/Footer";
import BlueContainer from "../../containers/BlueContainer";
import { getBoughtSharesInfo } from "../../utils/dbCalls";
import { formatAMPM } from "../../utils/globalFunctions";
import { Section } from "../Dashboard/styled";
import { Body, Container, Loading, OrdersContainer, Summary } from "./styled";

const Orders = () => {
  const [shares, setShares] = useState([]);
  const [loading, setLoading] = useState(false);

  // let sfd = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

  const handleShares = async () => {
    setLoading(true);
    let shares = await getBoughtSharesInfo();
    console.log(shares);
    setShares(shares);
    setLoading(false);
  };

  useEffect(() => {
    handleShares();
  }, []);

  // const minute = 1000 * 60;
  // const hour = minute * 60;
  // const day = hour * 24;
  // const year = day * 365;
  // let date = new Date();
  // let currYear = new Date().getFullYear();
  // let currMonth = new Date().getMonth();
  // let currDay = new Date().getDate();
  let time = new Date();
  console.log(time.getTime());

  // console.log(currDay, currMonth, currYear);
  // console.log(new Date().getTime());
  // console.log(formatAMPM(date));
  // console.log(
  //   `${date.getHours()} / ${date.getMinutes()} / ${date.getSeconds()}- ${date.getDay()}`
  // );

  return (
    <Container>
      <MainHeader />
      <Body>
        <SummaryCard
          text1="Total Income"
          text2="Daily Income"
          price1={300}
          price2={20}
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
            {shares
              ?.sort((a, b) => a.date.seconds - b.date.seconds)
              .map((order, index) => (
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
