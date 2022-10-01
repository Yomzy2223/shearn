import React from "react";
import { Container, Main, Form, Inputs, Middle } from "./styled";
import Logo from "../../../assets/images/ShearnLogo.png";
import { PhoneNumberInput, PlainInput } from "../../../components/Input";
import { MainButton } from "../../../components/botton";
import { TextsWithLink } from "../../../components/texts";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../../components/texts/Footer";

export const SignIn = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Main>
          <img src={Logo} alt="Shares earn logo" />
          <Inputs>
            <PhoneNumberInput />
            <PlainInput type="password" placeholder="Enter Password" />
          </Inputs>
        </Main>
        <Middle>
          <MainButton text="Login" />
          <TextsWithLink
            text={[
              {
                text: "Don't have an account? ",
                link: { to: "/register", text: "Sign Up" },
              },
            ]}
          />
        </Middle>
      </Form>
      <Footer />
    </Container>
  );
};
