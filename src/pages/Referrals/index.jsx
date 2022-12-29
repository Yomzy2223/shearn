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
  getIncomeFromDb,
  getReferralCodeFromDb,
  getReferralEmailFromDb,
  getReferredByCodeFromDb,
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
  const [daily, setDaily] = useState("--");
  const [income, setIncome] = useState("--");
  const [referralId, setReferralId] = useState("");
  const [referredById, setReferredById] = useState("");
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
      let totalIncome = await getIncomeFromDb(userInfo.email);
      let referralId = await getReferralCodeFromDb(userInfo.email);
      setDaily(totalIncome.daily);
      setIncome(totalIncome.total);
      setReferralId(referralId);
      let referredBy = await getReferredByCodeFromDb();
      console.log(referredBy);
      count++;
    } catch (e) {
      if (count === 0) handleError(e);
      count++;
    }
  };

  const handleReferral = async (formData) => {
    console.log(formData);
    setRefLoading(true);
    let userRefCode = await getReferralCodeFromDb(userInfo.email);
    let refEmail = await getReferralEmailFromDb(referredById);
    if (refEmail === false) toast.error("Referral code incorrect");
    else if (referredById === userRefCode)
      toast.error("You cannot refer yourself");
    else {
      const info = {
        email: refEmail,
        id: referredById,
      };
      await setReferredByCodeToDb(info, userInfo.email);
      toast.success("Referral code set successfully");
    }
    setRefLoading(false);
  };

  const handleReferreredBy = async () => {
    let referredBy = await getReferredByCodeFromDb(userInfo.email);
    if (referredBy) {
      setValue("referral", referredBy.email);
      setReferred(true);
    } else setReferred(false);
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
        <InputWrapper onSubmit={handleSubmit(handleReferral)}>
          <p>Referred by:</p>
          <PlainInput
            placeholder="Enter your referral's code"
            onChange={(e) => setReferredById(e.target.value)}
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
