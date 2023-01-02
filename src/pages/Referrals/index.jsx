import React, { useEffect, useRef, useState } from "react";
import { SummaryCard } from "../../components/cards/Summary";
import MainHeader from "../../components/header";
import BottomNav from "../../components/nav/BottomNav";
import { Footer } from "../../components/texts/Footer";
import {
  Body,
  Container,
  Info,
  InputWrapper,
  ReferralCode,
  ReferralTable,
} from "./styled";
import { FaCopy } from "react-icons/fa";
import {
  getAccountInfo,
  getBasicInfo,
  getIncomeFromDb,
  getReferralCodeFromDb,
  getReferralEmailFromDb,
  getRefInfo,
  setReferredByCodeToDb,
} from "../../utils/dbCalls";
import { handleError } from "../../utils/globalFunctions";
import { useSelector } from "react-redux";
import { PlainInput } from "../../components/Input";
import { MainButton } from "../../components/botton";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { referralSchema } from "../../utils/config";

const Referrals = () => {
  const [showCopied, setshowCopied] = useState(false);
  const [refIncome, setRefIncome] = useState("--");
  const [totalIncome, setTotalIncome] = useState("--");
  const [referralId, setReferralId] = useState("");
  const [referrals, setReferrals] = useState([]);
  const [referred, setReferred] = useState(true);
  const [refLoading, setRefLoading] = useState(false);

  let userInfo = useSelector((store) => store.userInfo.authInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({ resolver: yupResolver(referralSchema) });

  let count = 0;

  useEffect(() => {
    handlePulls();
    handleReferreredBy();
  }, []);

  const handlePulls = async () => {
    try {
      let accountInfo = await getAccountInfo(userInfo.email);
      let referralId = accountInfo.referralId;
      setRefIncome(accountInfo.referralIncome);
      setTotalIncome(accountInfo.totalIncome);
      setReferralId(referralId);
      count++;
    } catch (e) {
      if (count === 0) handleError(e);
      count++;
    }
  };

  const handleReferral = async (formData) => {
    setRefLoading(true);
    let accountInfo = await getAccountInfo(userInfo.email);
    let refEmail = await getRefInfo(formData.referral);
    console.log(refEmail);
    if (refEmail === false) toast.error("Referral code incorrect");
    else if (formData.referral === accountInfo.referralId)
      toast.error("You cannot refer yourself");
    else {
      const info = {
        email: refEmail,
        id: formData.referral,
      };
      await setReferredByCodeToDb(info, userInfo.email);
      toast.success("Referral code set successfully");
      setReferred(true);
      handleReferreredBy();
    }
    setRefLoading(false);
  };

  const handleReferreredBy = async () => {
    let accountInfo = await getAccountInfo(userInfo.email);
    let referredBy = accountInfo?.referredByInfo;
    if (referredBy) {
      let refBasicInfo = await getBasicInfo(referredBy?.email);
      setValue("referral", refBasicInfo.full_name);
      setReferred(true);
    } else setReferred(false);
    setReferrals(accountInfo?.referrals);
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
          text2="Referral Income"
          price1={totalIncome}
          price2={refIncome}
        />
        <InputWrapper onSubmit={handleSubmit(handleReferral)}>
          <p>Referred by:</p>
          <PlainInput
            placeholder="Enter your referral's code"
            // onChange={(e) => setreferredByInfo(e.target.value)}
            name="referral"
            register={register}
            disable={referred}
          />
          {!referred && <MainButton text="Submit" loading={refLoading} />}
        </InputWrapper>
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
            {referrals.map((referral, index) => (
              <tr key={index}>
                <td>{referral.name || "--"}</td>
                <td>{referral.share || "--"}</td>
                <td>{referral.commission || "--"}</td>
              </tr>
            ))}
            {/* <tr>
              <td>Ohracu</td>
              <td>$40</td>
              <td>$4</td>
            </tr>
            <tr>
              <td>Amos</td>
              <td>$100</td>
              <td>$10</td>
            </tr> */}
          </tbody>
        </ReferralTable>
      </Body>
      <Footer small />
      <BottomNav />
    </Container>
  );
};

export default Referrals;
