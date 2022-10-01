import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const TellerCard = ({ children, color, path }) => {
  return (
    <Container color={color} to={path}>
      {children}
    </Container>
  );
};

const Container = styled(Link)`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: clamp(5px, 1vw, 15px) 0;
  min-width: clamp(90px, 15vw, 200px);
  border-radius: 15px;
  background-color: ${({ color }) => color};
  max-width: max-content;
  text-decoration: none;

  > img {
    max-width: 26px;
  }

  > p {
    color: white;
    font-size: clamp(12px, 1.5vw, 14px);
    font-weight: 500;
  }
`;
