import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoutIcon, ShearnLogo } from "../../assets/images";
import AccountMainCard from "../../components/cards/AccountMain";
import { SummaryCard } from "../../components/cards/Summary";
import BottomNav from "../../components/nav/BottomNav";
import { Footer } from "../../components/texts/Footer";
import { AccountPageLinks } from "../../utils/config";
import { auth } from "../../utils/firebase";
import { Body, Container, Header, Info } from "./styled";

const Account = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    auth().signOut();
  };

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
              $border={true}
              // $border={index !== AccountPageLinks.length - 1 ? true : false}
            />
          ))}
          <AccountMainCard
            link=""
            text="Logout"
            icon={LogoutIcon}
            $border={false}
            action={handleLogout}
          />
        </Info>
      </Body>
      <Footer small />
      <BottomNav />
    </Container>
  );
};

export default Account;
