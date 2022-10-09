import React from "react";
import { useNavigate } from "react-router-dom";
import { ShearnLogo } from "../../../assets/images";
import { MainButton } from "../../../components/botton";
import { PlainInput } from "../../../components/Input";
import { Footer } from "../../../components/texts/Footer";
import { Container, Form, Inputs, Main, Middle } from "./styled";

const NewPassword = () => {
  const navigate = useNavigate();

  const handlePasswordChange = () => {
    navigate("/dashboard");
  };

  return (
    <Container>
      <Form onSubmit={handlePasswordChange}>
        <Main>
          <img src={ShearnLogo} alt="Shares earn logo" />
          <Inputs>
            <PlainInput type="password" placeholder="Enter new Password" />
            <PlainInput type="password" placeholder="Enter new Password" />
          </Inputs>
        </Main>
        <Middle>
          <MainButton text="Login" />
        </Middle>
      </Form>
      <Footer />
    </Container>
  );
};

export default NewPassword;
