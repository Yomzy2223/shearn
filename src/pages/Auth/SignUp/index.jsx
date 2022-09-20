import React from "react";
import { Container, Main, Form, Inputs, Middle } from "./styled";
import Logo from "../../../assets/images/ShearnLogo.png";
import { PhoneNumberInput, PlainInput } from "../../../components/Input";
import { MainButton } from "../../../components/botton";
import { TextsWithLink } from "../../../components/texts";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../../components/texts/Footer";

export const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/");
  };

  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        <Main>
          <img src={Logo} alt="Shares earn logo" />
          <Inputs>
            <PhoneNumberInput />
            <PlainInput
              type="password"
              placeholder="Password (at least 6 characters)"
            />
            <PlainInput placeholder="Confirm Password" />
          </Inputs>
        </Main>
        <Middle>
          <MainButton text="Register" type="submit" />
          <TextsWithLink
            text={[
              {
                text: "Already have an account?",
                link: { to: "/login", text: "Sign In" },
              },
            ]}
          />
        </Middle>
      </Form>
      <Footer />
    </Container>
  );
};
