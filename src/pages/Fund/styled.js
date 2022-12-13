import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 28px;
  width: 100%;
  padding-bottom: 60px;
  font-size: clamp(12px, 1.5vw, 14px);
  color: white;

  span {
    gap: 5px;
    color: #56fe8f;
    margin-right: 5px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-flow: column;
  gap: 50px;
  padding: 0 24px;
`;

export const Main = styled.div`
  display: flex;
  flex-flow: column;
  gap: 17px;
`;

export const AmountCards = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: clamp(15px, 5vw, 45px);

  * {
    text-decoration: none !important;
  }

  .paymentButton {
    cursor: pointer;
    display: flex;
    flex: 1;
    padding: 10px 24px;
    color: black;
    background-color: #47a4ff;
    border-radius: 5px;
    transition: 0.2s all ease;
    max-width: 80px;
    border: none;

    &:focus {
      background-color: #a3d0fc;
    }
  }
`;

export const AmountCard = styled.div`
  /* cursor: pointer;
  display: flex;
  flex: 1;
  padding: 10px 24px;
  color: black;
  background-color: #47a4ff;
  border-radius: 5px;
  transition: 0.2s all ease;
  max-width: 80px;

  &:focus {
    background-color: #a3d0fc;
  } */
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  color: black;
  width: 100%;

  input {
    width: 100%;
    height: 44px;
    padding-left: 26px;
    border-radius: 5px;
    border: none;
    outline: none;
  }

  span {
    position: absolute;
    top: 13px;
    left: 15px;
    color: black;
    font-size: clamp(13px, 1.4vw, 15px);
  }
`;

export const Middle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  gap: 14px;

  img {
    max-height: 45px;
  }
`;
