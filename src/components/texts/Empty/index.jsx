import React from "react";
import styled from "styled-components";

const Empty = ({ text }) => {
  return (
    <Container>
      <p>{text}</p>
    </Container>
  );
};

export default Empty;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  p {
    font-size: clamp(14px, 1.4vw, 16px);
    color: #c9c9c9;
    padding: 16px;
  }
`;
