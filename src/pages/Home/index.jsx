import React from "react";
import styled from "styled-components";
import { MainButton } from "../../components/botton";
import { ImagesCarousel } from "../../components/carousel";
import { PhoneNumberInput, PlainInput } from "../../components/Input";
import { LinkTextsWithDivider, TextsWithLink } from "../../components/texts";

const HomePage = () => {
  return (
    <Container>
      Hello world
      <ImagesCarousel />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 100%;
  gap: 20px;
`;
