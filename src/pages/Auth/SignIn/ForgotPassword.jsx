import React from "react";
import { useNavigate } from "react-router-dom";
import { ShearnLogo } from "../../../assets/images";
import { MainButton } from "../../../components/botton";
import { PhoneNumberInput, PlainInput } from "../../../components/Input";
import { TextsWithLink } from "../../../components/texts";
import { Footer } from "../../../components/texts/Footer";
import { Container, Form, Inputs, Main, Middle } from "./styled";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleEmailVerify = () => {
    navigate("/reset");
  };

  return (
    <Container>
      <Form onSubmit={handleEmailVerify}>
        <Main>
          <img src={ShearnLogo} alt="Shares earn logo" />
          <Inputs>
            <PlainInput
              type="password"
              placeholder="Enter your email address"
            />
          </Inputs>
        </Main>
        <Middle>
          <MainButton text="Continue" />
        </Middle>
      </Form>
      <Footer />
    </Container>
  );
};

export default ForgotPassword;
