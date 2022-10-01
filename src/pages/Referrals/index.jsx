import React, { useEffect, useRef, useState } from "react";
import { SummaryCard } from "../../components/cards/Summary";
import MainHeader from "../../components/header";
import BottomNav from "../../components/nav/BottomNav";
import { Footer } from "../../components/texts/Footer";
import { Body, Container, Info, ReferralCode, ReferralTable } from "./styled";
import { FaCopy } from "react-icons/fa";

const Referrals = () => {
  const [showCopied, setshowCopied] = useState(false);

  const referralCode = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode.current.innerText);
    setshowCopied(true);
  };

  return (
    <Container>
      <MainHeader title="Referral" />
      <Body>
        <SummaryCard
          text1="Total Income"
          text2="Daily Income"
          price1={300}
          price2={20}
        />
        <ReferralCode
          onClick={handleCopy}
          tabIndex={0}
          onBlur={() => setshowCopied(false)}
        >
          <p ref={referralCode}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            enim quasi. Laborum neque odit veritatis nostrum earum aut, beatae
            maxime! Voluptatibus iusto veniam natus animi dolorum. Atque fugit
            rem explicabo minus omnis! Animi ad, quasi eveniet nulla deserunt
          </p>
          <FaCopy color="#56FE8F" fontSize={20} />
          {showCopied && <p>Copied!</p>}
        </ReferralCode>
        <Info>
          <p>
            You get <span>10%</span> of your referrals purchases.
          </p>
          <div>
            <p> When your referral buys shares of:</p>
            <p>
              <span>$10</span> - you earn <span>$1</span>
            </p>
            <p>
              <span>$20</span> - you earn <span>$2</span>
            </p>
            <p>
              <span>$30</span> - you earn <span>$3</span>
            </p>
            <p>
              <span>$40</span> - you earn <span>$4</span>
            </p>
            <p>
              <span>$60</span> - you earn <span>$6</span>
            </p>
            <p>
              <span>$100</span> - you earn <span>$10</span>
            </p>
            <p>
              <span>$200</span> - you earn <span>$20</span>
            </p>
          </div>
        </Info>
        <ReferralTable>
          <thead>
            <tr>
              <td colSpan={3}>Referrals</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Referrals</td>
              <td>Shares bought</td>
              <td>My Commission</td>
            </tr>
            <tr>
              <td>Ohracu</td>
              <td>$40</td>
              <td>$4</td>
            </tr>
            <tr>
              <td>Amos</td>
              <td>$100</td>
              <td>$10</td>
            </tr>
          </tbody>
        </ReferralTable>
      </Body>
      <Footer small />
      <BottomNav />
    </Container>
  );
};

export default Referrals;
