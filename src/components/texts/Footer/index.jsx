import React from "react";
import styled from "styled-components";
import { LinkTextsWithDivider } from "..";
import { ShearnLogo } from "../../../assets/images";

export const Footer = ({ imgStyle, textStyle, small }) => {
  return (
    <Bottom>
      <img
        src={ShearnLogo}
        alt="Shares earn logo"
        style={{ ...imgStyle, width: small ? "60px" : "" }}
      />
      <LinkTextsWithDivider
        text={[
          { text: "About Us", to: "/account/about" },
          { text: "Investment", to: "/dashboard" },
        ]}
        style={textStyle}
        small={small}
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
