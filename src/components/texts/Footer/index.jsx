import React from "react";
import styled from "styled-components";
import { LinkTextsWithDivider } from "..";
import { ShearnLogo } from "../../../assets/images";

export const Footer = () => {
  return (
    <Bottom>
      <img src={ShearnLogo} alt="Shares earn logo" />
      <LinkTextsWithDivider
        text={[
          { text: "About Us", to: "/" },
          { text: "Investment", to: "/" },
        ]}
      />
    </Bottom>
  );
};

const Bottom = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0 25px 0;
  width: 100%;

  img {
    max-width: 100px;
  }
`;
