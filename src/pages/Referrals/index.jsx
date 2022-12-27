import React, { useEffect, useRef, useState } from "react";
import { SummaryCard } from "../../components/cards/Summary";
import MainHeader from "../../components/header";
import BottomNav from "../../components/nav/BottomNav";
import { Footer } from "../../components/texts/Footer";
import { Body, Container, Info, ReferralCode, ReferralTable } from "./styled";
import { FaCopy } from "react-icons/fa";
import { getIncomeFromDb, getReferralCodeFromDb } from "../../utils/dbCalls";
import { handleError } from "../../utils/globalFunctions";
import { useSelector } from "react-redux";

const Referrals = () => {
  const [showCopied, setshowCopied] = useState(false);
  const [daily, setDaily] = useState("--");
  const [income, setIncome] = useState("--");
  const [referralId, setReferralId] = useState("----");

  let userInfo = useSelector((store) => store.userInfo.authInfo);

  let count = 0;

  useEffect(() => {
    if (count === 0) handlePulls();
  }, []);

  const handlePulls = async () => {
    try {
      let totalIncome = await getIncomeFromDb(userInfo.email);
      let referralId = await getReferralCodeFromDb(userInfo.email);
      setDaily(totalIncome.daily);
      setIncome(totalIncome.total);
      console.log(referralId);
      setReferralId(referralId);
      count++;
    } catch (e) {
      handleError(e);
    }
  };

  const referralCodeRef = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCodeRef.current.innerText);
    setshowCopied(true);
  };

  return (
    <Container>
      <MainHeader title="Affliate" />
      <Body>
        <SummaryCard
          text1="Total Income"
          text2="Daily Income"
          price1={income}
          price2={daily}
        />
        {referralId && (
          <ReferralCode
            onClick={handleCopy}
            tabIndex={0}
            onBlur={() => setshowCopied(false)}
          >
            <p ref={referralCodeRef}>
              <span>Referral code: </span> {referralId}
            </p>
            <FaCopy color="#56FE8F" fontSize={20} />
            {showCopied && <p>Copied!</p>}
          </ReferralCode>
        )}
        <Info>
          <p>
            You get <span>10%</span> commision from your referrals first
            purchase.
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
              <td colSpan={3}>Affliate</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Names</td>
              <td>Shares bought</td>
              <td>Commission</td>
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
