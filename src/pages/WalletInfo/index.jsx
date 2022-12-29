import React, { useEffect, useState } from "react";
import { MainButton } from "../../components/botton";
import MainHeader from "../../components/header";
import { PlainInput } from "../../components/Input";
import BottomNav from "../../components/nav/BottomNav";
import { Footer } from "../../components/texts/Footer";
import {
  getWalletAddressFromDb,
  saveWalletAddressToDb,
} from "../../utils/dbCalls";
import { Body, Bottom, BottomInfo, Container, InputWrapper } from "./styled";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const WalletInfo = () => {
  const [walletAddress, setwalletAddress] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  let userInfo = useSelector((store) => store.userInfo.authInfo);

  const getWalletAddress = async () => {
    let address = await getWalletAddressFromDb(userInfo.email);
    setwalletAddress(address);
    setwalletAddress(address);
    console.log(address);
  };

  const saveWalletAddress = async () => {
    setLoading(true);
    if (walletAddress) {
      await saveWalletAddressToDb(inputValue, "update", userInfo.email);
      toast.success("Wallet address updated successfully");
    } else {
      await saveWalletAddressToDb(inputValue, "", userInfo.email);
      toast.success("Wallet address saved successfully");
    }
    setLoading(false);
  };

  useEffect(() => {
    getWalletAddress();
  }, []);

  return (
    <Container>
      <MainHeader title="My Wallet Info" />
      <Body>
        <p>
          Please enter your wallet address details below to withdraw your
          income.
        </p>
        {walletAddress && <p>Current Wallet Address: {walletAddress}</p>}
        <InputWrapper>
          <p>* Wallet Address (Trc20)</p>
          <PlainInput
            type="text"
            placeholder="Enter your wallet address (USDT Trc20)"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </InputWrapper>
        <Bottom>
          <MainButton
            text={walletAddress ? "Update" : "Submit"}
            clickAction={saveWalletAddress}
            loading={false}
          />
          <BottomInfo>
            Please enter your wallet address correctly. We will not be
            responsible for capital loss caused by information error.
          </BottomInfo>
        </Bottom>
      </Body>
      <Footer small />
      <BottomNav />
    </Container>
  );
};

export default WalletInfo;
