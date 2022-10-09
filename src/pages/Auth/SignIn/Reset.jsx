import React from "react";
import { ShearnLogo } from "../../../assets/images";
import { Footer } from "../../../components/texts/Footer";
import { Container, ResetText } from "./styled";

const Reset = () => {
  return (
    <Container>
      <img src={ShearnLogo} alt="Shares earn logo" />

      <ResetText>
        A reset link has been sent already, please click on it and reset your
        password.
      </ResetText>
      <Footer />
    </Container>
  );
};

export default Reset;
