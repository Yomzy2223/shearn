import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  gap: 15px;
  padding-bottom: 50px;
`;

export const Body = styled.div`
  display: flex;
  flex-flow: column;
  gap: 34px;
  width: 100%;
  padding-inline: clamp(10px, 5vw, 20px);
  margin-bottom: 10px;
`;

export const Section = styled.div`
  display: flex;
  flex-flow: column;
  gap: 13px;
  min-width: 100%;
  height: max-content;
`;

export const BalanceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  min-height: 91px;
`;

export const Balance = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  > p:only-of-type(1) {
    font-weight: 500;
    font-size: clamp(17px, 1.5vw, 18px);
  }

  > p:nth-of-type(2) {
    font-weight: 600;
    font-size: clamp(24px, 1.5vw, 26px);
    color: #56fe8f;
  }
`;

export const Transact = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
`;

export const HowItWorks = styled.div`
  display: flex;
  flex-flow: column;
  gap: 14px;
  color: white;

  > div {
    display: flex;
    align-items: center;
    color: #56fe8f;
    font-size: clamp(15px, 1.5vw, 18px);
    font-weight: 600;
    height: 14px;
    gap: 10px;

    > span {
      min-width: 4px;
      min-height: 23px;
      background-color: "#56FE8F";
    }
  }

  > ol {
    display: flex;
    flex-flow: column;
    gap: 10px;
    margin-left: 17px;
    font-size: clamp(12px, 1.5vw, 15px);
  }
`;

export const Shares = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 16px;
`;
