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
  Top,
  Transact,
} from "./styled";
import ShearnLogo from "../../assets/images/Shearn.svg";
import { TextCarousel } from "../../components/carousel/Texts";
import BlueContainer from "../../containers/BlueContainer";
import DollarLogo from "../../assets/images/DollarLogo.svg";
import { TellerCard } from "../../components/cards/TellerCard";
import FundIcon from "../../assets/images/Fund.svg";
import WithdrawIcon from "../../assets/images/Withdraw.svg";
import SharesCard from "../../components/cards/SharesCard";
import { allShares } from "../../utils/config";
import { Footer } from "../../components/texts/Footer";

const Dashboard = () => {
  return (
    <Container>
      <Top>
        <img src={ShearnLogo} alt="" />
      </Top>
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
            <TellerCard color="#8B8ABC">
              <img src={FundIcon} alt="fund" />
              <p>Fund</p>
            </TellerCard>
            <TellerCard color="#FF5858">
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
              />
            ))}
          </Shares>
          <Footer />
        </Section>
      </Body>
    </Container>
  );
};

export default Dashboard;
