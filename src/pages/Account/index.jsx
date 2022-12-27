import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LogoutIcon, ShearnLogo } from "../../assets/images";
import AccountMainCard from "../../components/cards/AccountMain";
import { SummaryCard } from "../../components/cards/Summary";
import BottomNav from "../../components/nav/BottomNav";
import { Footer } from "../../components/texts/Footer";
import { setAuthInfo } from "../../redux/Slices";
import { store } from "../../redux/Store";
import { AccountPageLinks } from "../../utils/config";
import { getBalanceFromDb, getIncomeFromDb } from "../../utils/dbCalls";
import { auth } from "../../utils/firebase";
import { Body, Container, Header, Info } from "./styled";

const Account = () => {
  const [balance, setBalance] = useState("--");
  const [income, setIncome] = useState("--");

  let userInfo = useSelector((store) => store.userInfo.authInfo);

  const navigate = useNavigate();

  // Log the user out and navigate to the login page
  const handleLogout = () => {
    localStorage.clear();
    signOut(auth).then(() => {
      store.dispatch(setAuthInfo(""));
      navigate("/login");
    });
  };

  useEffect(() => {
    handleBalance();
  }, []);

  const handleBalance = async () => {
    let balance = await getBalanceFromDb(userInfo.email);
    let totalIncome = await getIncomeFromDb(userInfo.email);
    setBalance(balance + totalIncome.total);
    setIncome(totalIncome.total);
  };

  return (
    <Container>
      <Header>
        <img src={ShearnLogo} alt="" />
      </Header>
      <Body>
        <SummaryCard
          text1="My Balance"
          text2="Total Income"
          price1={balance}
          price2={income}
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
