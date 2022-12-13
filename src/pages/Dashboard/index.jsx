import React, { useEffect, useState } from "react";
import { ImagesCarousel } from "../../components/carousel";
import {
  Balance,
  BalanceInfo,
  Body,
  Container,
  HowItWorks,
  Section,
  Shares,
  Transact,
} from "./styled";
import { TextCarousel } from "../../components/carousel/Texts";
import BlueContainer from "../../containers/BlueContainer";
import DollarLogo from "../../assets/images/DollarLogo.svg";
import { TellerCard } from "../../components/cards/TellerCard";
import FundIcon from "../../assets/images/Fund.svg";
import WithdrawIcon from "../../assets/images/Withdraw.svg";
import SharesCard from "../../components/cards/SharesCard";
import { allShares } from "../../utils/config";
import MainHeader from "../../components/header";
import BottomNav from "../../components/nav/BottomNav";
import { Link } from "react-router-dom";
import { Footer } from "../../components/texts/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Puff } from "react-loading-icons";
import { getBalanceFromDb, getProductsFromDb } from "../../utils/dbCalls";
import { mergeProductsInfo } from "../../utils/globalFunctions";

const Dashboard = () => {
  const [shares, setShares] = useState([]);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState("--");

  const handleShares = async () => {
    setLoading(true);
    const dbShares = await getProductsFromDb();
    setLoading(false);
    const merged = mergeProductsInfo(dbShares, allShares);
    console.log(merged);
    setShares(merged);
    // console.log(merged);
  };

  useEffect(() => {
    handleBalance();
    handleShares();
  }, []);

  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setLoading(false);
      }, 200000);
    }
  }, [loading]);

  const handleBalance = async () => {
    let balance = await getBalanceFromDb();
    setBalance(balance);
  };

  return (
    <Container>
      <MainHeader />
      <Body>
        <Section>
          <ImagesCarousel />
        </Section>
        <Section>
          {/* <BlueContainer> */}
          <TextCarousel />
          {/* </BlueContainer> */}
          <BlueContainer>
            <BalanceInfo>
              <Balance>
                <p>My Balance</p>
                <p>
                  {balance !== "--" && "$"}
                  {balance}
                </p>
              </Balance>
              <img src={DollarLogo} alt="$" />
            </BalanceInfo>
          </BlueContainer>
          <Transact>
            <TellerCard color="#8B8ABC" path="/account/fund">
              <img src={FundIcon} alt="fund" />
              <p>Fund</p>
            </TellerCard>
            <TellerCard color="#FF5858" path="/account/withdraw">
              <img src={WithdrawIcon} alt="withdraw" />
              <p>Withdraw</p>
            </TellerCard>
          </Transact>
        </Section>
        <Section>
          <HowItWorks>
            <div>
              <span style={{ backgroundColor: "#56FE8F" }} />
              <p>How it Works</p>
            </div>
            <ol>
              <li>
                Select anyone of the brands below to purchase the quantity of
                shares needed.
              </li>
              <li>
                It starts to create your income on a daily basis by % of shares
                earned.
              </li>
              <li>Withdraw the income whenever it's above $10.</li>
              <li>Stably earn 5 times of your investment till the end.</li>
            </ol>
          </HowItWorks>
        </Section>
        <Section>
          <Shares>
            {loading && (
              <Puff stroke="#56FE8F" fill="#56FE8F" width={60} height={60} />
            )}
            {shares
              .sort((a, b) => a.price - b.price)
              .map((share, index) => (
                <SharesCard
                  key={share.id}
                  title={share.title}
                  image={share.image}
                  price={share.price}
                  hourProfit={share.hourProfit}
                  lifeSpan={share.lifeSpan}
                  totalRevenue={share.revenue}
                  path={`shares/${share.title}`}
                />
              ))}
            {!loading && (
              <SharesCard
                title="Coming soon..."
                image="--"
                price="--"
                hourProfit="--"
                lifeSpan="--"
                totalRevenue="--"
                path="dashboard"
              />
            )}
            {!loading && (
              <SharesCard
                title="Coming soon..."
                image="--"
                price="--"
                hourProfit="--"
                lifeSpan="--"
                totalRevenue="--"
                path="dashboard"
              />
            )}
          </Shares>
          {/* <Footer /> */}
        </Section>
      </Body>
      <Footer small />
      <BottomNav />
    </Container>
  );
};

export default Dashboard;
