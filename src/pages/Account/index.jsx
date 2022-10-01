import React from "react";
import { ShearnLogo } from "../../assets/images";
import AccountMainCard from "../../components/cards/AccountMain";
import { SummaryCard } from "../../components/cards/Summary";
import BottomNav from "../../components/nav/BottomNav";
import { Footer } from "../../components/texts/Footer";
import { AccountPageLinks } from "../../utils/config";
import { Body, Container, Header, Info } from "./styled";

const Account = () => {
  return (
    <Container>
      <Header>
        <img src={ShearnLogo} alt="" />
      </Header>
      <Body>
        <SummaryCard
          text1="My Balance"
          text2="Daily Income"
          price1={500}
          price2={25}
        />
        <Info>
          {AccountPageLinks.map((each, index) => (
            <AccountMainCard
              key={index}
              link={each.link}
              text={each.text}
              icon={each.icon}
              $border={index !== AccountPageLinks.length - 1 ? true : false}
            />
          ))}
        </Info>
      </Body>
      <Footer small />
      <BottomNav />
    </Container>
  );
};

export default Account;
