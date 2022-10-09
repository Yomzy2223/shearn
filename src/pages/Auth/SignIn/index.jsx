import React from "react";
import { Container, Main, Form, Inputs, Middle } from "./styled";
import { PhoneNumberInput, PlainInput } from "../../../components/Input";
import { MainButton } from "../../../components/botton";
import { TextsWithLink } from "../../../components/texts";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../../components/texts/Footer";
import { ShearnLogo } from "../../../assets/images";

export const SignIn = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Main>
          <img src={ShearnLogo} alt="Shares earn logo" />
          <Inputs>
            <PlainInput type="email" placeholder="Enter your email" />
            <PlainInput type="password" placeholder="Enter Password" />
            <TextsWithLink
              text={[
                {
                  text: "Forgot your password? ",
                  link: { to: "/forgot-password", text: "Click here" },
                },
              ]}
              style={{ alignSelf: "flex-end" }}
            />
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

//Zillow
