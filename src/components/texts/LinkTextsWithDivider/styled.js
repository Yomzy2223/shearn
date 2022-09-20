import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 7px;

  font-weight: 600;
  font-size: 12px;
  color: #56fe8f;
  height: max-content;
  width: 100%;

  div {
    display: flex;
    flex-flow: row wrap;
    gap: 7px;
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 100%;
  background-color: #56fe8f; ;
`;
