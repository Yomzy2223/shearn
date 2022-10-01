import React from "react";
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

const Dashboard = () => {
  return (
    <Container>
      <MainHeader />
      <Body>
        <Section>
          <ImagesCarousel />
        </Section>
        <Section>
          <BlueContainer>
            <TextCarousel />
          </BlueContainer>
          <BlueContainer>
            <BalanceInfo>
              <Balance>
                <p>My Balance</p>
                <p>$500.00</p>
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
              <li>Withdraw the income whenever it's above 1000.</li>
              <li>Stably earn 5 times of your investment till the end.</li>
            </ol>
          </HowItWorks>
        </Section>
        <Section>
          <Shares>
            {allShares.map((share, index) => (
              <SharesCard
                key={index}
                title={share.title}
                image={share.image}
                price={share.price}
                hourProfit={share.hourProfit}
                lifeSpan={share.lifeSpan}
                totalRevenue={share.totalRevenue}
                path={share.title}
              />
            ))}
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
