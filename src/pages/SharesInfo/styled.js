import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  color: white;
  gap: 15px;
`;

export const Body = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
  max-width: 90%;
  margin: auto;
  margin-bottom: 52px;
`;

export const Image = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 7px;

  p {
    font-weight: 700;
    font-size: clamp(20px, 2vw, 22px);
    color: white;
  }
  img {
    height: 99px;
  }
`;
export const KeyInfo = styled.div`
  display: flex;
  flex-flow: column;
  gap: 13px;
  font-size: clamp(15px, 1.5vw, 17px);

  p {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
export const QuantityWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: clamp(15px, 1.5vw, 17px);
`;
export const Quantity = styled.div`
  display: flex;
  gap: clamp(5px, 2vw, 15px);

  button {
    color: black;
    background-color: #56fe8f;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: none;
    outline: none;
    transition: 0.3s all ease;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`;
export const DetailedInfo = styled.div`
  display: flex;
  flex-flow: column;
  gap: 28px;

  font-size: clamp(12px, 1.4vw, 14px);
  font-weight: 300;
`;
