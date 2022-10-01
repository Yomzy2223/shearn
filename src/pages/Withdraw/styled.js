import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 28px;
  width: 100%;
  color: white;
  padding-bottom: 60px;
`;

export const Body = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 21px;
  padding: 0 24px;
`;

export const WithdrawAmount = styled.div`
  display: flex;
  flex-flow: column;
  gap: 15px;
  background-color: #084784;
  border: 1px solid #56fe8f;
  border-radius: 5px;
  font-weight: 400;
  font-size: clamp(12px, 1.4vw, 14px);
  padding: 30px 20px;
  width: 100%;
  max-width: 800px;

  > p:nth-of-type(1) {
    font-size: clamp(10px, 1.4vw, 12);
  }

  input {
    color: white;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #bcafaf;
    outline: none;
    height: 30px;
    ::-webkit-inner-spin-button {
      display: none;
    }
  }
`;
export const WithdrawInfo = styled.div`
  display: flex;
  flex-flow: column;
  gap: 29px;
  background-color: #084784;
  font-weight: 400;
  font-size: clamp(12px, 1.4vw, 14px);
  border: 1px solid #56fe8f;
  border-radius: 5px;
  padding: 11px 10px 38px;
  width: 90%;
  max-width: 700px;

  img {
    align-self: center;
    width: 51px;
  }

  ol {
    display: flex;
    flex-flow: column;
    align-self: flex-start;
    justify-self: flex-start;
    gap: 10px;
    margin: 15px;

    li {
    }
  }
`;
export const WithdrawKeyInfo = styled.div``;
