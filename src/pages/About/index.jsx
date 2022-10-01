import React from "react";
import { AllSharesImg, ArrowBlock, SEImg } from "../../assets/images";
import MainHeader from "../../components/header";
import BottomNav from "../../components/nav/BottomNav";
import { Footer } from "../../components/texts/Footer";
import { AboutBlock, AboutInfo, Body, Container, SHImage } from "./styled";

const About = () => {
  return (
    <Container>
      <MainHeader title="About Us" />
      <Body>
        <SHImage>
          <img src={SEImg} alt="" />
        </SHImage>
        <AboutInfo>
          <AboutBlock>
            <img src={ArrowBlock} alt="" />
            <span>About Us</span>
          </AboutBlock>
          <p>
            We sell shares of stock and allow purchasers to invest ang gain
            increase to their investment through profit. We also allow investors
            to earn from their referrals when their referrals buy shares. We
            also partner wit multiple brands and firms that are ready to sell
            some of their company's shares with least and affordable amount.
            Hence we as the intermediary connect investors and other brand
            shares to make more sales and allow investors generate income.
          </p>
        </AboutInfo>
        <SHImage>
          <img src={AllSharesImg} alt="" />
        </SHImage>
        <AboutInfo>
          <AboutBlock>
            <img src={ArrowBlock} alt="" />
            <span>Investment</span>
          </AboutBlock>
          <p>
            The more shares you buy, the more profit you get. The dividend is
            added to you balance in your account daily. We also welcome your
            feedback on how we can improve our system.
          </p>
        </AboutInfo>
      </Body>
      <Footer small />
      <BottomNav />
    </Container>
  );
};

export default About;
